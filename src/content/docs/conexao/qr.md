---
title: QR Code no terminal
description: Renderize os dados de autenticação no terminal da sua aplicação.
---
A biblioteca emite os dados do QR. Sua aplicação decide como apresentá-los; não há impressão ou arquivo de imagem obrigatório no núcleo.

Instale um renderizador na aplicação:

```sh
npm install qrcode@1.5.4
```

```js title="qr.js"
import { DraxClient } from 'drax-wa-js';
import QRCode from 'qrcode';

const client = new DraxClient({
  storage: { path: './sessions/session.drax' },
  auth: { method: 'qr' },
});

client.on('qr', ({ data, expiresAt }) => {
  QRCode.toString(data, { type: 'terminal', small: true })
    .then(text => {
      console.log(text);
      console.log('Exibição válida até:', new Date(expiresAt).toLocaleTimeString());
    })
    .catch(error => console.error('QR:', error.message));
});

client.on('ready', () => console.log('Cliente pronto.'));
client.on('client:error', error => console.error(error.code, error.message));
client.on('transport:error', error => console.error(error.message));

process.once('SIGINT', () => { void client.close(); });
process.once('SIGTERM', () => { void client.close(); });

await client.connect();
```

A biblioteca emite novas referências enquanto elas estiverem disponíveis. Renderize cada novo evento; não continue mostrando um QR anterior.

:::caution[Validação atual]
A geração com referências reais e a exibição no terminal foram verificadas. O pareamento completo por leitura desse QR no aplicativo WhatsApp ainda não foi confirmado nos testes desta versão.
:::

Para uma interface web, utilize os mesmos dados de `qr.data` no renderizador da aplicação. Não publique o QR em uma página de acesso público.
