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
