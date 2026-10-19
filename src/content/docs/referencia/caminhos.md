---
title: Imports, caminhos e extensibilidade
description: Localize as entradas suportadas, os módulos internos e os pontos de extensão.
---
## Entradas públicas de importação

| Import | Exports suportados |
| --- | --- |
| `drax-wa-js` | DraxClient, DRAX_WA_JS_VERSION, SqliteSessionStore, SessionStoreError, MediaError |
| `drax-wa-js/store` | SqliteSessionStore, SessionStoreError |

```js
import {
  DraxClient,
  DRAX_WA_JS_VERSION,
  SqliteSessionStore,
  SessionStoreError,
  MediaError,
} from 'drax-wa-js';

import {
  SqliteSessionStore as Store,
  SessionStoreError as StoreError,
} from 'drax-wa-js/store';
```

`package.json.exports` define as entradas aceitas pelo Node.js. Um arquivo existir dentro do pacote não cria automaticamente um caminho público de importação. Subpaths não exportados são bloqueados com `ERR_PACKAGE_PATH_NOT_EXPORTED`.

## Como encontrar cada assunto

| Objetivo | Referência |
| --- | --- |
| Criar e configurar o cliente | [Configuração](/conexao/configuracao/) |
| Todos os métodos próprios e propriedades suportadas | [API do cliente](/referencia/cliente/) |
| Utilizar on, once, off e outros métodos herdados | [EventEmitter](/referencia/eventemitter/) |
| Organizar inscrições gerenciadas e consultar eventos | [Eventos e estados](/conexao/eventos/) |
| Tipos de conteúdo e opções de envio | [sendMessage](/mensagens/sendmessage/) |
| Adaptar armazenamento | [Armazenamento](/conexao/armazenamento/) |
| Entender arquivos, exports locais e classes internas | [Catálogo técnico](/referencia/modulos/) |
| Consultar limites atuais de suporte | [Compatibilidade](/referencia/versoes/) |

## Pontos de extensão do consumidor

Você pode separar funções, classes, módulos ou serviços e conectar seus handlers pela interface de eventos escolhida. Serviços podem delegar ao mesmo `sendMessage()`, sem recriar serialização, criptografia ou transporte.

Um adaptador de sessão utiliza a opção pública `sessionStore`. As fontes de mídia e as opções por envio também são pontos suportados de configuração. Os respectivos guias descrevem os contratos.

## Módulos internos e membros visíveis

O [catálogo técnico](/referencia/modulos/) enumera os arquivos distribuídos, seus exports locais e os membros próprios dos protótipos. Esses exports ajudam a estudar a estrutura, mas não são promovidos a imports públicos por estarem documentados.

O cliente mantém referências internas como `connection`, `sessionStore`, estratégias Signal e componentes de envio. Acessibilidade técnica de uma propriedade não garante estabilidade ou suporte para uso direto.

Membros com `#` têm privacidade imposta pelo JavaScript. Eles não podem ser utilizados externamente. Dados de sessão, credenciais e valores de chaves não fazem parte deste inventário.

Se um caso de uso exigir uma capacidade interna ainda sem API, a evolução correta é definir e validar um ponto público apropriado. Essa distinção permite documentar a estrutura completa sem transformar detalhes mutáveis em dependências permanentes dos bots.
