---
title: Instalação
description: Requisitos e instalação da distribuição atual.
---
## Requisitos

- Node.js **22.13 ou superior**.
- Projeto configurado como ES Module.
- Acesso de rede ao WhatsApp.

## Instalar o pacote

A distribuição atual é um arquivo `.tgz`. Não há publicação no registro npm confirmada nesta etapa.

```sh
mkdir meu-bot
cd meu-bot
npm init -y
npm pkg set type=module
npm install /caminho/drax-wa-js-0.0.1-alpha.34.tgz
```

Substitua o caminho pela localização do pacote recebido. A instalação copia a biblioteca para `node_modules`.

```js
import { DraxClient, DRAX_WA_JS_VERSION } from 'drax-wa-js';

console.log(DRAX_WA_JS_VERSION);
```

Caso você tenha o código-fonte da biblioteca, gere a distribuição com:

```sh
npm ci
npm test
npm pack
```

Continue com [seu primeiro cliente](/inicio/conexao/). Não importe arquivos de `src/` do pacote: use as entradas públicas.
