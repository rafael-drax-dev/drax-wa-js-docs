---
title: Áudio e notas de voz
description: Escolha entre arquivo de áudio e nota de voz.
---
## Áudio comum

```js
await client.sendMessage(jid, {
  audio: { path: './audio.mp3' },
});
```

## Nota de voz

```js
await client.sendMessage(jid, {
  audio: { path: './voz.ogg' },
  ptt: true,
});
```

Forneça conteúdo compatível Ogg/Opus. A biblioteca não converte MP3 em Opus.

`ptt` é específico de áudio. Legenda `caption` não é aceita em áudio. Duração e forma de onda não são calculadas automaticamente.

[Enviar nota de voz de visualização única](/midia/visualizacao-unica/).
