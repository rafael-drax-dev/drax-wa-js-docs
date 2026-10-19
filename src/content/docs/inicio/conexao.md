---
title: Primeira conexão
description: Reconecte uma sessão salva com DraxClient.
---
:::caution[Sessão já pareada]
O exemplo requer um arquivo de sessão válido, criado por um pareamento anterior. O DraxClient ainda não oferece uma API pública simplificada para gerar um novo código de pareamento.
:::

```js
import { DraxClient } from 'drax-wa-js/experimental/core';

const client = new DraxClient({
  storage: { path: './sessions/session.drax' },
});

try {
  await client.connect();
  await client.waitUntilReady(30_000);
  await client.sendMessage('5511999999999', {
    text: 'Olá pela drax-wa-js!',
  });
} finally {
  await client.close();
}
```

O destinatário é fictício. Em um processo contínuo, mantenha o cliente aberto e feche-o durante o encerramento da aplicação. Não execute duas instâncias usando a mesma sessão simultaneamente.

Veja [armazenamento](/conexao/armazenamento/) para migrar uma sessão JSON existente.
