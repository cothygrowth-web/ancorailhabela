# Âncora Ilhabela · site

Site de uma página da Âncora Ilhabela, pronto para publicar. Não precisa instalar nada nem rodar comando: os arquivos já estão no formato final.

## O que tem nesta pasta

| Arquivo ou pasta | O que é |
|---|---|
| `index.html` | A página: textos das seções, títulos e as informações para o Google e para o compartilhamento (WhatsApp, Instagram) |
| `css/ancora.css` | Cores, fontes e layout |
| `js/ancora.js` | Links (`CONFIG`), unidades (`UNIDADES`), endereços e tempos (`LOCAIS`) e as animações |
| `js/lib/` | GSAP e Lenis, as bibliotecas das animações (hospedadas aqui mesmo, sem depender de outro site) |
| `fonts/` | Anxler e Kanit |
| `img/` | Fotos em WebP e `og-ancora.jpg`, a imagem que aparece quando alguém compartilha o link |
| `favicon.ico`, `icon.svg`, `apple-touch-icon.png`, `icons/`, `manifest.webmanifest` | Ícones da aba do navegador e da tela inicial do celular |
| `404.html` | Página de endereço não encontrado |
| `robots.txt`, `sitemap.xml` | Orientação para o Google |
| `vercel.json` | Proteções de segurança e cache na Vercel |
| `_headers` | As mesmas proteções, caso o site vá para a Cloudflare Pages ou a Netlify |

## Antes de começar: o plano da Vercel

O plano gratuito da Vercel (Hobby) é só para uso pessoal, sem fins comerciais. Um site de hospedagem é uso comercial, então a conta da Vercel precisa do plano **Pro**. Se preferir outra hospedagem de site estático (Cloudflare Pages ou Netlify, por exemplo), esta mesma pasta funciona lá: as proteções já estão no arquivo `_headers`. Confira os termos do plano escolhido.

## Publicar: GitHub + Vercel, sem linha de comando

1. **GitHub:** crie um repositório novo (por exemplo `ancora-ilhabela`), de preferência **Private**. Não marque "Add a README": com o repositório vazio, aparece o link para enviar arquivos. Clique em Create repository.
2. Na página do repositório, clique em **uploading an existing file**. Se o repositório já tiver algum arquivo, use **Add file → Upload files**. Abra a pasta do site, selecione **tudo o que está dentro dela** (`index.html`, `css`, `js`, `img` etc.) e arraste para o navegador. Não arraste a pasta em si. São 84 arquivos, e o GitHub aceita até 100 por envio. Clique em **Commit changes**.
3. **Vercel:** Add New → Project → importe o repositório. Em Framework Preset escolha **Other**, deixe o Build Command vazio e clique em **Deploy**. Em cerca de um minuto o site fica no ar num endereço provisório `….vercel.app`.
   - Se o repositório não aparecer na lista, clique em **Adjust GitHub App Permissions** e libere o acesso da Vercel a ele.
   - Se o `index.html` ficou dentro de uma pasta no repositório (a pasta foi arrastada inteira), escolha essa pasta em **Root Directory**.
4. Abra o endereço provisório no celular e no computador e confira.
5. **Domínio:** na Vercel, Settings → Domains → adicione `ancorailhabela.com.br` e `www.ancorailhabela.com.br` (o www redirecionando para o endereço sem www). A Vercel mostra os valores exatos dos registros de DNS.
6. **DNS (na Hostinger):** hoje o DNS do domínio está na Hostinger, onde também está o site antigo, e o e-mail do domínio é do Google Workspace. No painel da Hostinger, na área de DNS do domínio:
   - registro **A** do `@`: troque pelo valor que a Vercel mostrar;
   - registro **AAAA** do `@`: apague (aponta para o site antigo; a Vercel não usa IPv6, e quem acessa por IPv6 continuaria vendo o site antigo);
   - **www**: um CNAME com o valor que a Vercel mostrar (apague registros A ou AAAA antigos do www, se houver);
   - **MX** e **TXT**: não mexa. São do e-mail e da verificação do Google.

   Não troque os nameservers. A conta da Hostinger continua necessária enquanto o DNS estiver lá, inclusive para o e-mail funcionar. O site antigo sai do ar assim que o DNS muda (pode levar algumas horas), então faça a troca quando a Âncora estiver pronta. O HTTPS é automático.
7. **Google:** adicione o site no Google Search Console e envie o sitemap: `https://ancorailhabela.com.br/sitemap.xml`.

## Editar depois (direto no GitHub)

Abra o arquivo no GitHub, clique no lápis (Edit this file), faça a alteração e clique em Commit changes. A Vercel publica sozinha em cerca de um minuto.

- **Links** de reserva (Airbnb), Instagram, Cubs e o crédito Cothy: bloco `CONFIG`, no topo de `js/ancora.js`.
  - O link geral de reserva e o do Instagram também estão escritos no `index.html` (botões, lista para quem navega sem JavaScript e dados para o Google). Se mudarem, procure o link antigo no `index.html` e troque também.
  - Cada unidade, em `UNIDADES`, já tem um campo `airbnb:''`. Preencha com o link do anúncio daquela unidade para o botão dela ir direto para ele; vazio, vale o link geral.
- **Unidades** (nome, bairro, frase, fotos e descrição de cada foto): `UNIDADES`, em `js/ancora.js`. **Endereço e tempos** (praia, mercado, balsa): `LOCAIS`, logo abaixo. O desenho do mapa de cada unidade vem de dados prontos do OpenStreetMap: se o endereço mudar, o mapa precisa ser refeito.
  - Nome e endereço das unidades também aparecem no `index.html`, na lista para quem navega sem JavaScript e nos dados para o Google (`application/ld+json`). Se mudar um nome ou um endereço, troque lá também.
- **Textos das seções:** `index.html`.
- **Fotos:** pasta `img/`. Para trocar uma foto, envie o arquivo novo em WebP com o mesmo nome. Quem já visitou o site pode ver a foto anterior por até um dia.
- **Cores:** no `:root`, no início de `css/ancora.css`.
- Não precisa mexer no `?v=` que aparece nos endereços do CSS e do JavaScript.

## Fontes

A Kanit é livre (SIL Open Font License). A Anxler é comercial: a licença precisa permitir o uso como fonte de site (webfont), porque quem visita o site baixa o arquivo da fonte, como acontece com qualquer fonte de site.

## Bibliotecas e créditos

GSAP 3.13 (licença padrão gratuita), Lenis 1.3.21 (MIT), Kanit (SIL Open Font License 1.1), Anxler (licença do autor), dados do mapa © colaboradores do OpenStreetMap (ODbL, com crédito no próprio mapa).

## Notas técnicas

- Página estática, sem etapa de build. Os scripts carregam com `defer`; a parte pesada (unidades, mapas e animações) monta logo depois que a foto da chegada aparece na tela.
- Endereços com `#` levam direto à seção ou à unidade: `#marca`, `#unidades`, `#u-1` a `#u-5`, `#avaliacoes`, `#construcao`.
- Segurança: política de conteúdo (Content-Security-Policy) no `vercel.json`, no `_headers` e numa meta do `index.html`, sem scripts de terceiros e sem rastreadores. O único script dentro do `index.html` (o da chegada, no `<head>`) é liberado pelo seu hash: se ele for editado, o hash precisa ser recalculado nos três lugares, senão o navegador bloqueia o script.
