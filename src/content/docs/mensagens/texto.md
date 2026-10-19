---
title: Texto
description: Envie texto no privado ou em grupo.
---
```js
await client.sendMessage(jid, { text: 'Olá!' });
```

O destinatário pode ser um número/JID privado aceito pela resolução da biblioteca ou o JID de um grupo. Para grupos, utilize o identificador real da conversa; o nome exibido não substitui o JID.

```js
await client.sendText(jid, 'Olá!');
```

O atalho delega ao envio central. Um ACK positivo representa aceitação do servidor; não prova leitura ou exibição no aplicativo.
