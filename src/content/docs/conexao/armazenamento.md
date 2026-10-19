---
title: Sessão e armazenamento
description: Preserve credenciais e restaure a conexão com um arquivo .drax.
---
```js
const client = new DraxClient({
  storage: { path: './sessions/session.drax' },
});
```

O caminho deve terminar em **`.drax`**. O arquivo é criado quando necessário; você não precisa criar uma sessão manualmente.

Na próxima inicialização, reutilize o mesmo caminho. A biblioteca tenta restaurar a sessão existente. Se ela não existir, inicia autenticação; se houver rejeição confirmada da conta vinculada, retorna ao fluxo de autenticação de forma controlada.

## Cuidados operacionais

- Use uma instância por sessão.
- Não compartilhe o arquivo entre contas diferentes.
- Não publique credenciais, arquivos auxiliares do banco ou backups.
- Faça backup consistente com a aplicação parada.
- Falhas de acesso, integridade ou formato exigem tratamento explícito; a biblioteca não apaga arquivos corrompidos silenciosamente.

A inicialização não converte sessões JSON. O formato oficial atual é SQL versionado em `.drax`.

## Adaptador próprio

A biblioteca aceita `sessionStore` no lugar de `storage`. O adaptador precisa implementar `load()` e `save(state)`; para recuperação automática de uma sessão rejeitada e `logout()`, precisa também de `reset()`.

`load()` retorna `null` quando não há sessão. `save()` deve preservar integralmente os valores recebidos. `reset()` deve retirar a sessão ativa com segurança, sem permitir que um escritor obsoleto a restaure.

O armazenamento fornecido pela biblioteca pode ser criado explicitamente:

```js
import { DraxClient } from 'drax-wa-js';
import { SqliteSessionStore } from 'drax-wa-js/store';

const store = new SqliteSessionStore('./sessions/session.drax');
const client = new DraxClient({ sessionStore: store });

try {
  await client.connect();
  // Mantenha a aplicação em execução.
} finally {
  // Use este encerramento no fim do ciclo de vida da aplicação.
  await client.close();
  await store.close();
}
```

Quando você injeta o adaptador, também é responsável por fechá-lo. O exemplo ilustra a propriedade do recurso; não feche imediatamente após conectar em um bot permanente.
