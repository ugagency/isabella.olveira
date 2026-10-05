# Isabella Oliveira — landing page

Projeto em Next.js, TypeScript e Tailwind, baseado no PDF aprovado `site-input/layout-aprovado.pdf`. Inclui todas as seções, fotos originais, fontes locais, menu móvel, navegação por âncoras e o último CTA com gradiente branco e botão oliva.

## Executar no computador

Use Node.js 22 ou superior e npm.

```bash
npm ci
npm run dev
```

Abra <http://localhost:3000>.

Para conferir a versão de produção:

```bash
npm run build
npm start
```

## Deploy na Vercel

1. Extraia o ZIP. A pasta `isabella-oliveira-site` é a raiz do projeto.
2. Envie o conteúdo dessa pasta a um repositório no GitHub.
3. Na Vercel, escolha **Add New → Project** e importe o repositório.
4. Selecione o framework **Next.js**. Os comandos padrão de instalação e build são suficientes. Se a pasta estiver dentro de outro repositório, selecione-a em **Root Directory**.
5. Clique em **Deploy**. Nenhuma variável de ambiente é necessária nesta versão.
6. Após comprar o domínio, adicione-o nas configurações do projeto na Vercel e siga os registros DNS indicados no painel.

Documentação: <https://vercel.com/docs/frameworks/full-stack/nextjs> e <https://vercel.com/docs/domains/working-with-domains/add-a-domain>.

## Links e domínio

Edite somente `config/site.ts`. Os destinos estão em `null`, como solicitado:

```ts
whatsapp: null,
instagram: null,
linkedin: null,
youtube: null,
trajectory: null,
siteUrl: null,
indexable: false,
```

Troque `null` pelo endereço completo entre aspas. Para WhatsApp, use `https://wa.me/55DDDNUMERO`, sem espaços ou pontuação. O campo `trajectory` é o destino futuro do botão “Conheça minha trajetória”.

Enquanto o destino não for definido, o botão ou ícone fica desabilitado, mantendo o visual aprovado e sem abrir páginas ou números fictícios. Os menus de navegação interna já funcionam.

Depois de preencher `siteUrl` com o domínio real, confirmar os links e concluir a copy, altere `indexable` para `true`. Essa opção atualiza os metadados e o `robots.txt` para permitir indexação. A versão de teste começa com indexação desativada.

## Textos pendentes

Edite `config/content.ts`:

- Pilar **Clareza e direção**: `[NÃO DEFINIDO]`.
- Título do CTA final: o anterior foi mantido em `app/page.tsx`, com a marca `REVISAR · [NÃO DEFINIDO]`. Após receber a nova frase, substitua o título e limpe `content.contact.pending`.
- Textos dos três serviços: preservados até a nova copy da Isabella.

O ano 2024 no rodapé foi mantido conforme o material aprovado.

## Arquivos principais

| Arquivo | Função |
| --- | --- |
| `app/page.tsx` | Estrutura das seções e títulos com destaque em itálico |
| `app/globals.css` | Paleta, tipografia, espaçamentos, gradientes e responsividade |
| `config/content.ts` | Textos aprovados e placeholders |
| `config/site.ts` | Destinos dos botões, redes sociais e domínio |
| `public/images/` | Fotos, logo e monogramas |
| `public/fonts/` | Fontes servidas localmente |
| `components/header.tsx` | Menu móvel com suporte a teclado |
| `site-output/` | Registro da implementação e revisão visual |

As fotografias foram preparadas com recortes e composição, sem geração ou alteração da aparência. Hero e CTA usam WebP sem perdas para preservar os pixels visíveis das imagens aprovadas.

## Verificações

```bash
npm run typecheck
npm run build
```

O projeto também oferece `npm run lint` para manutenção. Consulte `site-output/visual-review.md` para as larguras e interações revisadas.
