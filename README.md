# Documentação drax-wa-js

Site estático Astro + Starlight, em português. Conteúdo em src/content/docs. Não copie sessões, logs privados ou pacotes da biblioteca para public/.

## Trabalhar localmente

```sh
npm ci
npm run dev
npm run build
npm run preview
```

O desenvolvimento e a prévia ficam em 127.0.0.1. O resultado publicável está em dist/. A busca é gerada durante o build; o modo dev não substitui essa verificação.

## Publicação recomendada: Cloudflare Pages com Git

1. Crie um repositório no GitHub para o conteúdo desta pasta. Não publique a raiz do projeto nem credenciais.
2. No Cloudflare Pages, conecte o repositório usando a integração Git.
3. Nome sugerido: drax-wa-js. Disponibilidade ainda não confirmada.
4. Build: npm run build. Saída: dist. Node: 22.23.3.
5. Se o repositório contiver apenas esta pasta, use a raiz padrão. Se usar um monorepo revisado, configure documentacao como diretório raiz.
6. A integração publica novos commits enviados com git push. Verifique o build antes de enviar.

O endereço será um subdomínio pages.dev atribuído pelo Cloudflare. Não há domínio próprio .dev incluído.

## Publicação pelo terminal

Depois de instalar/configurar Wrangler e autenticar a conta:

```sh
npx wrangler login
npm run deploy
```

O script compila e envia dist para o projeto drax-wa-js. Confirme o nome real do projeto antes de usá-lo.

Escolha a integração Git ao criar o projeto se quiser deploy automático por push. Um projeto criado como Direct Upload não pode ser convertido depois para integração Git; seria necessário outro projeto. Não execute pages project create sem decidir esse ponto.

## Atualizar a documentação

1. Confirme a API implementada e seus limites.
2. Atualize a página correspondente e os exemplos.
3. Atualize referência de versões.
4. Execute npm run build.
5. Revise o diff e envie o commit para o repositório conectado.

Uma funcionalidade nova exige alteração explícita na documentação. O deploy automático publica o conteúdo; ele não inventa nem atualiza exemplos sozinho.
