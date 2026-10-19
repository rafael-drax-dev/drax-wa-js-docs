---
title: Vídeos
description: Envie um vídeo com legenda.
---
```js
await client.sendMessage(jid, {
  video: { path: './video.mp4' },
  caption: 'Meu vídeo',
});
```

A biblioteca prepara, criptografa e faz upload do conteúdo. Não há transcodificação, geração automática de thumbnail ou cálculo automático de duração nesta versão.
