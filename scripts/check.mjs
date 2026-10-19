import assert from 'node:assert/strict';
import {readFile,readdir,access} from 'node:fs/promises';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {resolve,dirname,join} from 'node:path';
import {spawnSync} from 'node:child_process';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const read=p=>readFile(resolve(root,p),'utf8');
async function files(dir){const out=[];for(const e of await readdir(dir,{withFileTypes:true})){const p=join(dir,e.name);if(e.isDirectory())out.push(...await files(p));else out.push(p)}return out}
const contract=JSON.parse(await read('public/api-contract.json'));
const docs=(await files(resolve(root,'src/content/docs'))).filter(p=>/\.mdx?$/.test(p));
const texts=await Promise.all(docs.map(p=>readFile(p,'utf8')));
let snippets=0;
for(let i=0;i<docs.length;i++){
 const s=texts[i];
 assert(!/drax-wa-js\/(?:experimental|src)\//.test(s),'Import privado: '+docs[i]);
 assert(!/(?:\/home\/|advSecretKey|BEGIN PRIVATE KEY)/.test(s),'Dado privado: '+docs[i]);
 for(const m of s.matchAll(/^```(?:js|javascript)(?:[^\n]*)\n([\s\S]*?)^```/gm)){
  const result=spawnSync(process.execPath,['--check','--input-type=module'],{input:m[1],encoding:'utf8'});
  assert.equal(result.status,0,docs[i]+': '+result.stderr);snippets++;
 }
}
const reference=await read('src/content/docs/referencia/cliente.md');
for(const method of [...contract.methods,...contract.properties])assert(reference.includes('`'+method),'Método sem referência: '+method);
assert(texts.some(s=>s.includes(contract.version)),'Versão não documentada');
if(process.argv.includes('--library')){
 const libraryRoot=resolve(root,'../drax-wa-js');
 const pkg=JSON.parse(await readFile(join(libraryRoot,'package.json'),'utf8'));
 const api=await import(pathToFileURL(join(libraryRoot,'src/index.js')));
 assert.equal(pkg.version,contract.version);assert.equal(api.DRAX_WA_JS_VERSION,contract.version);
 assert.deepEqual(Object.keys(api).sort(),[...contract.exports].sort());
 const descriptors=Object.getOwnPropertyDescriptors(api.DraxClient.prototype);
 const methods=Object.keys(descriptors).filter(k=>k!=='constructor'&&typeof descriptors[k].value==='function').sort();
 const props=Object.keys(descriptors).filter(k=>descriptors[k].get).sort();
 assert.deepEqual(methods,[...contract.methods].sort());assert.deepEqual(props,[...contract.properties].sort());
 assert.deepEqual(Object.keys(pkg.exports).sort(),['.','./store']);
}
if(process.argv.includes('--built')){
 const dist=resolve(root,'dist');const htmls=(await files(dist)).filter(p=>p.endsWith('.html'));
 assert(htmls.length>=docs.length,'Páginas ausentes');
 let links=0;
 for(const p of htmls){
  const html=await readFile(p,'utf8');
  for(const m of html.matchAll(/href="([^"]+)"/g)){
   const href=m[1].replaceAll('&amp;','&');if(!href.startsWith('/')||href.startsWith('//'))continue;
   const pathname=decodeURIComponent(href.split(/[?#]/)[0]);const target=resolve(dist,'.'+pathname);
   assert(target.startsWith(dist+'/')||target===dist,'Caminho inválido');
   try{await access(target.endsWith('/')||!pathname.split('/').at(-1)?.includes('.')?join(target,'index.html'):target)}catch{throw Error('Link quebrado '+href+' em '+p)}links++;
  }
 }
 const home=await readFile(join(dist,'index.html'),'utf8');
 assert(home.includes('docs-intro')&&!home.includes('className='),'Classes MDX inválidas');
 assert(home.includes('pagefind')&&home.includes('expressive-code'),'Busca ou código ausente');
 assert((await files(dist)).some(p=>p.endsWith('pagefind.js')),'Índice de busca ausente');
 console.log(htmls.length+' páginas geradas; '+links+' links locais válidos.');
}
console.log(docs.length+' documentos; '+snippets+' exemplos JavaScript válidos; contrato '+contract.version+' conferido.');
