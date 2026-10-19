---
title: Visualização única
description: Use o mesmo pipeline de mídia com viewOnce.
---
```js
await client.sendMessage(jid, {
  image: { path: './foto.jpg' },
  viewOnce: true,
});

await client.sendMessage(jid, {
  video: { path: './video.mp4' },
  viewOnce: true,
});

await client.sendMessage(jid, {
  audio: { path: './voz.ogg' },
  ptt: true,
  viewOnce: true,
});
```

São suportados imagem, vídeo e nota de voz Ogg/Opus. Documento e áudio comum sem ptt não são aceitos nesse modo.

O recurso reutiliza resolução, preparação, criptografia e upload de mídia. Os wrappers são interpretados no recebimento pelo fluxo geral.

Os envios foram aceitos em testes de protocolo, com download e integridade verificados. A apresentação visual depende também do cliente WhatsApp; esse teste não equivale a prometer suporte a formatos futuros nem a impedir cópias por outros meios.
