
Usuário aprovou ativar o Cloud para o formulário de contato funcionar enviando e-mail real para o time.

## Plano

1. **Ativar Lovable Cloud** — habilita backend (Supabase) e infra de e-mail.
2. **Configurar domínio de e-mail** — abrir o diálogo de setup do domínio remetente. Sugestão: `notify.picode.com.br`. Você precisará adicionar uns registros DNS no provedor do domínio depois (te guio na hora). Esse passo é necessário para os e-mails saírem do seu próprio domínio com boa entregabilidade.
3. **Subir infra de e-mails** — fila com retry automático, suppression list, logs de envio. Tudo gerenciado.
4. **Criar tabela `contact_submissions`** — guarda cada envio do formulário (nome, cargo, e-mail, telefone, escola, mensagem, timestamp). Mesmo que o e-mail falhe, o registro fica. RLS travado: só service role escreve/lê.
5. **Criar dois templates de e-mail** (React Email):
   - **Notificação interna** → para `piovani@picode.com.br` com todos os dados do lead, formatados.
   - **Confirmação para o lead** → "Recebemos seu contato, retornamos em até 1 dia útil", assinado pela PiCode.
6. **Criar rota pública `/api/contact`** — recebe o POST do formulário, valida com Zod (limites de tamanho anti-spam), grava no banco, dispara os dois e-mails pela fila. Sem auth (formulário é público), mas com validação rígida.
7. **Atualizar `src/routes/contato.tsx`** — trocar o `mailto:` por `fetch('/api/contact', ...)`. Manter a tela de "Mensagem enviada!" no sucesso, mostrar toast de erro se algo falhar.

## Resultado para você

- Visitante preenche e clica "Enviar" → vê tela de sucesso na hora.
- Time recebe e-mail formatado em `piovani@picode.com.br` em segundos.
- Lead recebe e-mail de confirmação automático.
- Histórico de todos os contatos fica salvo no banco.

## Confirmar antes de executar

- **E-mail de destino**: `piovani@picode.com.br` (mesmo do `mailto:` atual). Se for outro, me avisa.
- **Subdomínio remetente**: vou sugerir `notify.picode.com.br` no diálogo. Se preferir outro nome, ajusta na hora.
