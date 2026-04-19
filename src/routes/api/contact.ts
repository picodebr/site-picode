import { createFileRoute } from '@tanstack/react-router'
import { createClient } from '@supabase/supabase-js'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Nome é obrigatório').max(120),
  role: z.string().trim().min(1, 'Cargo é obrigatório').max(120),
  email: z.string().trim().email('E-mail inválido').max(200),
  phone: z.string().trim().min(6, 'Telefone inválido').max(40),
  school: z.string().trim().min(1, 'Escola é obrigatória').max(200),
  message: z.string().trim().min(1, 'Mensagem é obrigatória').max(4000),
})

export const Route = createFileRoute('/api/contact')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
        const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
        const baseUrl = new URL(request.url).origin

        if (!supabaseUrl || !supabaseServiceKey) {
          console.error('Missing required environment variables')
          return Response.json({ error: 'Server configuration error' }, { status: 500 })
        }

        let body: unknown
        try {
          body = await request.json()
        } catch {
          return Response.json({ error: 'Invalid JSON' }, { status: 400 })
        }

        const parsed = contactSchema.safeParse(body)
        if (!parsed.success) {
          return Response.json(
            { error: 'Validation failed', details: parsed.error.flatten() },
            { status: 400 },
          )
        }

        const data = parsed.data
        const supabase = createClient(supabaseUrl, supabaseServiceKey)

        const { data: inserted, error: insertError } = await supabase
          .from('contact_submissions')
          .insert({
            name: data.name,
            role: data.role,
            email: data.email,
            phone: data.phone,
            school: data.school,
            message: data.message,
          })
          .select('id, created_at')
          .single()

        if (insertError || !inserted) {
          console.error('Failed to insert contact submission', { error: insertError })
          return Response.json({ error: 'Failed to save submission' }, { status: 500 })
        }

        // Format submittedAt in Brazil timezone for the email
        const submittedAt = new Date(inserted.created_at).toLocaleString('pt-BR', {
          timeZone: 'America/Sao_Paulo',
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        })

        // Trigger the notification email via the internal send route.
        // We pass the service role key as Bearer so the auth check inside
        // send-transactional-email treats this as an authenticated request.
        try {
          const sendRes = await fetch(`${baseUrl}/lovable/email/transactional/send`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${supabaseServiceKey}`,
            },
            body: JSON.stringify({
              templateName: 'contact-notification',
              recipientEmail: 'piovani@picode.com.br',
              idempotencyKey: `contact-notify-${inserted.id}`,
              templateData: {
                name: data.name,
                role: data.role,
                email: data.email,
                phone: data.phone,
                school: data.school,
                message: data.message,
                submittedAt,
              },
            }),
          })

          if (!sendRes.ok) {
            const text = await sendRes.text()
            console.error('Failed to enqueue contact notification email', {
              status: sendRes.status,
              body: text,
              submissionId: inserted.id,
            })
            // Submission was saved — return success even if email failed.
          }
        } catch (err) {
          console.error('Error calling send-transactional-email', { error: err, submissionId: inserted.id })
          // Non-fatal: submission persisted.
        }

        return Response.json({ success: true, id: inserted.id })
      },
    },
  },
})
