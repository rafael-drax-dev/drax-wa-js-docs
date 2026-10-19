---
title: Visualização única
description: Utilize viewOnce com os tipos de mídia suportados.
---
## Imagem

```js
await client.sendMessage(jid, {
  image: { path: './foto.jpg' },
  viewOnce: true,
});
```

## Vídeo

```js
await client.sendMessage(jid, {
  video: { path: './video.mp4' },
  viewOnce: true,
});
```

## Nota de voz

```js
await client.sendMessage(jid, {
  audio: { path: './voz.ogg' },
  ptt: true,
  viewOnce: true,
});
```

Documento e áudio comum sem `ptt` não são aceitos nesse modo. A nota de voz precisa usar conteúdo Ogg/Opus.

Esses envios foram aceitos nos testes, com download e integridade conferidos. O proprietário confirmou o funcionamento visual nos testes realizados; isso não representa validação universal de todos os clientes WhatsApp. Não interprete esse recurso como garantia de impossibilidade de cópia do conteúdo.
