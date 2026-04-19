
O usuário enviou um vídeo novo (`PiCode_maonamassa_1min-2.mp4`) para substituir o `impact-bg.mp4` atual de ~69 MB que está quebrando o deploy (limite de 25 MB por arquivo no Cloudflare KV).

Preciso checar o tamanho do novo vídeo e onde o atual é referenciado.

## Plano

1. **Verificar tamanho do vídeo enviado** — se estiver acima de 25 MB, comprimir com ffmpeg para caber no limite do Cloudflare Workers (mirar em ~15–20 MB para margem segura, mantendo qualidade visual aceitável para fundo de seção).
2. **Substituir o arquivo** — copiar o novo vídeo para `public/impact-bg.mp4` (mesmo caminho/nome do atual), sobrescrevendo o antigo. Assim nenhuma referência no código precisa mudar.
3. **Confirmar referência única** — `src/routes/index.tsx` usa o vídeo na seção de impacto via tag `<video>` apontando para `/impact-bg.mp4`. Manter o mesmo nome evita edição de código.
4. **Republicar** — depois disso o erro 413 do KV some e o publish do Lovable deve passar.

## Detalhes técnicos

- Caminho final: `public/impact-bg.mp4`
- Se precisar comprimir: `ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset slow -an -movflags +faststart output.mp4` (sem áudio, já que é fundo silencioso, e com faststart para começar a tocar antes do download completo).
- Validar tamanho final < 25 MB antes de finalizar.
