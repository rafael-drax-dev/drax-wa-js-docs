# Documentação drax-wa-js

[Site oficial](https://drax-wa-js.pages.dev) · [Repositório](https://github.com/rafael-drax-dev/drax-wa-js-docs)

Guias em português para utilizar a API pública da biblioteca. O site utiliza Astro e Starlight, com busca, navegação por categorias, temas claro/escuro e exemplos com botão de copiar.

## Desenvolvimento

```sh
npm ci
npm run dev
npm run build
npm run preview
```

O desenvolvimento e a prévia ficam em 127.0.0.1. O build gera dist/ e executa automaticamente a validação dos exemplos e dos links locais. A busca é gerada no build.

## Publicação

O Cloudflare Pages está integrado à branch main deste repositório. Enviar um commit com git push inicia o build e o deploy automático. O comando configurado é npm run build, com saída em dist/.

Execute o build antes do push e acompanhe o check Cloudflare Pages no commit. Um push concluído não garante que o deploy passou.

Não publique sessões, logs privados ou pacotes da biblioteca. Consulte [CONTRIBUTING.md](CONTRIBUTING.md) para as regras de sincronização entre API, testes, exemplos e documentação.


## Atualizar o catálogo técnico
Quando o código-fonte da biblioteca estiver disponível como diretório irmão drax-wa-js, execute `node scripts/catalog.mjs` e depois `node scripts/check.mjs --library`. O inventário enumera módulos, exports locais e membros de protótipos, sem publicar valores de credenciais ou constantes de sessão.
O build independente deste repositório utiliza o catálogo versionado; não precisa acessar uma sessão ou uma conexão WhatsApp. A referência de EventEmitter deve cobrir todos os métodos herdados identificados pela verificação.
