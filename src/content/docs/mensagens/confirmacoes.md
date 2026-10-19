---
title: Confirmações de envio
description: Diferencie aceitação, entrega, leitura e reprodução.
---
```js
// Registre antes dos envios. Persista as confirmações por ID na sua aplicação.
const subscription = client.events.subscribe({
  'receipt': receipt => {
    for (const id of receipt.messageIds) {
      console.log('Mensagem:', id, 'estado:', receipt.status);
    }
  }
}, {
  onError: (error, { event }) => console.error('Falha no handler:', event, error.cause ?? error),
});

const sent = await client.sendMessage(jid, { text: 'Olá!' });
console.log('ID para correlação:', sent.id);
```

Em uma aplicação permanente, registre o listener de `receipt` antes dos envios e mantenha seus IDs para correlação, evitando perder uma confirmação rápida.

| Sinal | Significado |
| --- | --- |
| Resolução de `sendMessage()` com ACK | Servidor aceitou a mensagem |
| `delivered` | Confirmação de entrega recebida |
| `read` | Confirmação de leitura recebida |
| `played` | Confirmação de reprodução recebida |
| `inactive` ou `null` | Outro tipo; não trate como leitura |

O evento contém `id`, `messageIds`, `from`, `participant`, `recipient`, `type`, `status` e `fromSelfDevice`.

A disponibilidade dessas confirmações depende do WhatsApp e da conversa. Um ACK não comprova renderização no celular. Retry completo ainda não está disponível; evite reenviar automaticamente sem controle de duplicação.
