---
title: Texto e destinatários
description: Envie texto no privado ou em uma conversa de grupo.
---
```js
await client.sendMessage('5511999999999', {
  text: 'Olá!',
});
```

Para grupos, informe o **JID da conversa**, não seu nome exibido:

```js
await client.sendMessage(groupJid, {
  text: 'Olá, grupo!',
});
```

`groupJid` deve ter o formato numérico terminado em `@g.us`. Obtenha-o de uma mensagem recebida na conversa. Uma listagem pública de grupos ainda não está disponível nesta API.

## Atalho de texto

```js
await client.sendText(jid, 'Olá!', { timeoutMs: 20_000 });
```

## Consultar um destinatário privado

```js
const contact = await client.resolveRecipient('5511999999999', 20_000);
console.log(contact.phoneJid, contact.lidJid, contact.userJid);
```

O retorno também contém `deviceJids`. Não é necessário consultar manualmente antes de cada envio: `sendMessage()` já resolve o destino.
