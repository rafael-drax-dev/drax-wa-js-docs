import {defineConfig} from 'astro/config'
import starlight from '@astrojs/starlight'
export default defineConfig({
 site:'https://drax-wa-js.pages.dev',
 output:'static',
 integrations:[starlight({
  title:'drax-wa-js',
  description:'Conecte sua aplicação com a drax-wa-js. Guias de autenticação, sessão persistente, mensagens e mídia.',
  locales:{root:{label:'Português',lang:'pt-BR'}},
  customCss:['./src/styles/custom.css'],
  favicon:'/favicon.svg',
  sidebar:[
   {label:'Comece por aqui',items:[
    {label:'Visão geral',slug:'index'},
    {label:'Instalação',slug:'inicio/instalacao'},
    {label:'Primeira conexão',slug:'inicio/conexao'}
   ]},
   {label:'Conexão e sessão',items:[
    {label:'Configurar o cliente',slug:'conexao/configuracao'},
    {label:'Armazenamento .drax',slug:'conexao/armazenamento'},
    {label:'Código de pareamento',slug:'conexao/pareamento'},
    {label:'QR Code no terminal',slug:'conexao/qr'},
    {label:'Eventos e estados',slug:'conexao/eventos'},
    {label:'Encerrar e desconectar',slug:'conexao/encerramento'}
   ]},
   {label:'Mensagens',items:[
    {label:'sendMessage()',slug:'mensagens/sendmessage'},
    {label:'Texto',slug:'mensagens/texto'},
    {label:'Responder com citação',slug:'mensagens/citacoes'},
    {label:'Receber mensagens',slug:'mensagens/recebimento'},
    {label:'Confirmações de entrega',slug:'mensagens/confirmacoes'}
   ]},
   {label:'Mídia',items:[
    {label:'Fontes e limites',slug:'midia/fontes'},
    {label:'Imagens',slug:'midia/imagens'},
    {label:'Áudio e notas de voz',slug:'midia/audio'},
    {label:'Vídeos',slug:'midia/videos'},
    {label:'Documentos',slug:'midia/documentos'},
    {label:'Visualização única',slug:'midia/visualizacao-unica'},
    {label:'Receber e baixar mídia',slug:'midia/recebimento'}
   ]},
   {label:'Referência',items:[
    {label:'API do cliente',slug:'referencia/cliente'},
    {label:'client.on, once e off',slug:'referencia/eventemitter'},
    {label:'Imports e extensibilidade',slug:'referencia/caminhos'},
    {label:'Catálogo dos módulos internos',slug:'referencia/modulos'},
    {label:'Erros e diagnóstico',slug:'referencia/erros'},
    {label:'Compatibilidade e versões',slug:'referencia/versoes'}
   ]}
  ]
 })]
})
