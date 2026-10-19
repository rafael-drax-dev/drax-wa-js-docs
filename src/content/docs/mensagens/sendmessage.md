---
title: sendMessage()
description: Interface principal para envio de mensagens.
---
```js
await client.sendMessage(jid, content, options);
```

content escolhe **um** tipo principal:

| Campo | Conteúdo |
| --- | --- |
| text | Texto |
| image | Fonte de imagem |
| video | Fonte de vídeo |
| audio | Fonte de áudio |
| document | Fonte de documento |

Campos complementares: caption, mimetype, fileName, ptt e viewOnce, quando compatíveis com o tipo.

| Opção | Finalidade |
| --- | --- |
| id | ID explícito da mensagem |
| timeoutMs | Timeout da operação de envio |
| readyTimeoutMs | Espera pelo cliente pronto |
| quoted | Mensagem recebida normalizada para responder |
| media | Limites e opções da resolução de mídia |

```js
await client.sendMessage(jid, {
  image: { url: 'https://exemplo.com/foto.jpg' },
  caption: 'Uma imagem',
}, {
  timeoutMs: 30_000,
  media: { maxBytes: 10 * 1024 * 1024 },
});
```

A URL é ilustrativa. O conteúdo precisa existir e ser compatível com o tipo solicitado.

Texto, mensagens para outros devices e transporte utilizam a infraestrutura central. sendText() é um atalho para o envio de texto, sem pipeline independente.

Stickers, contatos, localização, botões, listas, interativos e menções ainda não fazem parte da API aqui documentada.
