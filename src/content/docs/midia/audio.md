---
title: Áudio e notas de voz
description: Diferencie áudio comum de nota de voz.
---
```js
await client.sendMessage(jid, {
  audio: { path: './audio.mp3' },
});
```

Para nota de voz, forneça conteúdo compatível Ogg/Opus:

```js
await client.sendMessage(jid, {
  audio: { path: './voz.ogg' },
  ptt: true,
});
```

ptt é específico de áudio. A biblioteca não converte MP3 em Opus automaticamente. caption não é aceito para áudio.
