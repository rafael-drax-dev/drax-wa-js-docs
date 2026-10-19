---
title: Vídeos
description: Envie vídeo de arquivo, URL, bytes ou stream.
---
```js
await client.sendMessage(jid, {
  video: { path: './video.mp4' },
  caption: 'Meu vídeo',
});
```

O mesmo formato aceita uma [fonte remota](/midia/fontes/):

```js
await client.sendMessage(jid, {
  video: { url: 'https://seu-site.com/video.mp4' },
});
```

Não há transcodificação, geração de thumbnail ou cálculo automático de duração e dimensões. Use um arquivo compatível com os clientes nos quais pretende reproduzi-lo.
