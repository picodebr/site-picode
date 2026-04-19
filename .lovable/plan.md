
Usuário ajustou: **só enviar 1 e-mail (notificação interna para o time)**. Sem confirmação para o lead. Simplifica bastante.

## Plano revisado

1. **Scaffold de e-mails transacionais** — cria infra base (rota de envio, registry, página `/unsubscribe`, suppression). Necessário para usar o sistema de e-mail.

2. **Criar 1 template React Email**: `contact-notification` → para o time (`piovani@picode.com.br`), com os dados do lead formatados na identidade visual da PiCode (navy/azul).

3. **Criar tabela `contact_submissions`** — guarda nome, cargo, e-mail, telefone, escola, mensagem, timestamp. RLS travado (só service role).

4. **Criar rota pública `/api/contact`** (server route TanStack) — recebe POST, valida com Zod (anti-spam: limites de tamanho, formato de e-mail), grava no banco, enfileira o e-mail de notificação.

5. **Atualizar `src/routes/contato.tsx`** — trocar o `mailto:` por `fetch('/api/contact')`. Mantém tela de sucesso, adiciona toast de erro.

6. **Publicar o app** — server routes só funcionam em produção depois do publish.

## Resultado

- Visitante envia → vê tela de sucesso.
- Time recebe e-mail formatado em `piovani@picode.com.br` em segundos.
- Lead **não recebe nada** (conforme pedido).
- Histórico salvo no banco mesmo se o e-mail falhar.

## Sobre o DNS

`notify.picode.com.br` ainda em verificação. Tudo acima pode ser construído agora; e-mails ficam na fila e saem assim que o DNS validar.
