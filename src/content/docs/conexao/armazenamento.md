---
title: Armazenamento .drax
description: Persistência SQL e migração das credenciais.
---
O arquivo **.drax** contém a sessão SQL, incluindo material criptográfico sensível. Não publique esse arquivo, cópias, arquivos auxiliares do SQLite ou logs com credenciais.

## Migração de JSON

```js
const client = new DraxClient({
  storage: {
    path: './sessions/session.drax',
    migrateFrom: './sessions/sessao-antiga.json',
  },
});
```

A migração valida a estrutura e preserva a origem. Depois da migração, o arquivo .drax é a fonte de persistência: não volte a executar runners que gravam a cópia JSON antiga.

O armazenamento centraliza codificação dos valores, validação, transações e tratamento de falhas. Erros de leitura, conversão e escrita devem ser tratados pela aplicação, sem recriar a sessão automaticamente.

Faça backup consistente com a aplicação parada. Restrinja permissões do arquivo e nunca o coloque no repositório da documentação.
