
## Diagnóstico

A rota `/api/contact` (e `lovable/email/transactional/send.ts` e `preview.ts`) chama `render()` do `@react-email/components`. Esse `render` puxa `html-to-text` para gerar a versão texto do e-mail, e `html-to-text` tenta importar `htmlparser2` via ESM — resolução falha → servidor de dev cai → preview em branco.

## Correção

**Adicionar `htmlparser2` como dependência direta** do projeto. Isso força o instalador a resolver o pacote no nível raiz de `node_modules`, satisfazendo o import ESM de `html-to-text`.

Passos:
1. Adicionar `htmlparser2` ao `package.json` (via `add_dependency`).
2. Aguardar reinstalação automática.
3. Confirmar nos logs do dev-server que o erro sumiu e o preview voltou.

Se mesmo assim o erro persistir (raro), o plano B é mover a renderização do e-mail para fora do request handler (renderizar via worker da fila ou pré-renderizar templates) — mas começamos pelo fix simples.

## Por que aconteceu

`@react-email/components` é uma dependência relativamente pesada e o `bun`/`npm` em alguns casos não hoista `htmlparser2` para o local que o ESM loader do Node espera. Declarar explicitamente resolve.

Nada de mexer no código da aplicação — só adicionar a dependência.
