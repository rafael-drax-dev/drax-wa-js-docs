---
title: Instalação
description: Prepare o ambiente e instale o pacote da biblioteca.
---
Use **Node.js 22.13 ou superior** e npm. O armazenamento utiliza SQLite nativo do Node.

## Gerar o pacote

Na pasta do código da biblioteca:
```sh
npm ci
npm test
npm pack
```

## Instalar no projeto consumidor

```sh
mkdir meu-bot
cd meu-bot
npm init -y
npm pkg set type=module
npm install /caminho/drax-wa-js-0.0.1-alpha.27.tgz
```

O caminho é um exemplo: substitua pela localização real do pacote. Não há nesta etapa uma publicação pública no npm confirmada. A instalação deve copiar o pacote para node_modules, sem depender de um link para o código-fonte.

```js
import { DraxClient } from 'drax-wa-js/experimental/core';
console.log(typeof DraxClient); // function
```

Continue em [Primeira conexão](/inicio/conexao/).
