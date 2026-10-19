---
title: Seu primeiro cliente
description: Inicie uma aplicação com autenticação por código e sessão persistente.
---
Este exemplo inicia sem sessão prévia. Quando já houver uma sessão válida, a biblioteca a restaura e não pede outro código.

## Exemplo recomendado

Crie `index.js`:

```js title="index.js"
import { DraxClient } from 'drax-wa-js';

const phoneNumber = process.env.WA_PHONE;
if (!/^\d{7,15}$/.test(phoneNumber ?? '')) {
  throw new Error('Defina WA_PHONE com país, DDD e número, somente dígitos.');
}

const client = new DraxClient({
  storage: { path: './sessions/session.drax' },
  auth: { method: 'code' },
});

let pairingRequest = null;

client.on('auth:required', () => {
  if (pairingRequest) return;
  pairingRequest = client.requestPairingCode(phoneNumber)
    .catch(error => console.error('Autenticação:', error.message))
    .finally(() => { pairingRequest = null; });
});

client.on('pairing-code', ({ code }) => {
  console.log('Código:', code);
});

client.on('ready', () => console.log('Cliente pronto.'));
client.on('message', message => {
  console.log('Mensagem recebida:', message.type);
});
client.on('client:error', error => console.error(error.code, error.message));
client.on('transport:error', error => console.error(error.message));

let closing;
const close = () => closing ??= client.close();
process.once('SIGINT', () => { void close(); });
process.once('SIGTERM', () => { void close(); });

try {
  await client.connect();
} catch (error) {
  await close();
  if (error.code !== 'ERR_CONNECTION_CANCELLED') throw error;
}
```

Execute usando o número da conta que deseja conectar:

```sh
WA_PHONE=5511999999999 node index.js
```

O número acima é fictício. Digite o código exibido no WhatsApp, em **Dispositivos conectados → Conectar dispositivo → Conectar com número de telefone**.

## Quando posso enviar?

`connect()` inicia o ciclo de conexão e retorna o próprio cliente. Isso não significa que a autenticação já terminou.

Para uma operação que depende de conexão pronta:

```js
await client.waitUntilReady(60_000);
const result = await client.sendMessage(jid, { text: 'Olá!' });
console.log(result.id);
```

Ou execute sua operação após o evento `ready`. Em uma aplicação permanente, mantenha o cliente aberto e feche-o ao encerrar o processo.

Veja também: [QR no terminal](/conexao/qr/) e [referência do cliente](/referencia/cliente/).
