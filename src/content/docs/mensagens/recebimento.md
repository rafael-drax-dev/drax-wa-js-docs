---
title: Receber mensagens
description: Use o evento message e os campos normalizados.
---
```js
client.on('message', message => {
  console.log({
    id: message.id,
    chat: message.chat,
    author: message.author,
    type: message.type,
    text: message.text,
    timestamp: message.timestamp,
  });
});
```

| Campo | Uso |
| --- | --- |
| `id` | Identificador da mensagem |
| `chat` | Conversa privada ou grupo |
| `author` | Autor da mensagem |
| `type` | Texto, mídia identificada ou tipo desconhecido |
| `text` | Texto ou legenda, quando disponível |
| `media` | Descritor utilizado para download |
| `timestamp` | Timestamp informado pelo servidor, em segundos, ou `null` |

O objeto recebido deve ser preservado ao usar [quoted](/mensagens/citacoes/). Para baixar mídia, veja [receber e baixar](/midia/recebimento/).

## Falhas de processamento

```js
client.on('message:error', error => {
  console.error('Mensagem não processada:', error.message);
});
```

`message:unsupported` sinaliza mensagens que não produziram conteúdo suportado. Ele não significa necessariamente que a conversa foi desconectada.

`message:decrypted` é uma notificação adicional emitida antes de `message` para o mesmo conteúdo. Utilize apenas um desses eventos para não processar a mensagem duas vezes.
