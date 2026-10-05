# Implementação — Isabella Oliveira

Versão 1.0.0, 01/10/2026. Projeto local para deploy pelo usuário na Vercel.

## Resultado

Landing page de uma rota, com todas as seções do PDF aprovado, conteúdo HTML editável, tipografia local, monogramas, curvas entre seções, fotografias reais e CTA branco com botão oliva. Menu por âncoras e menu móvel com abertura, fechamento, Escape e retorno de foco.

Os destinos externos solicitados como placeholders permanecem desabilitados e são configurados em `config/site.ts`. Não há números, perfis ou destinos inventados. Não foram adicionados serviços, depoimentos, preços, formulários ou integrações.

## Arquivos

- `app/page.tsx`: conteúdo principal como Server Component.
- `components/header.tsx`: interação do menu, única fronteira de cliente necessária.
- `app/globals.css`: composição do PDF e ajustes para celular/tablet.
- `config/content.ts`: copy aprovada e duas indicações de texto pendente.
- `config/site.ts`: WhatsApp, redes sociais, destino da trajetória e domínio.
- `public/images`: fotos, logo, monogramas e palavras decorativas em vetores.
- `public/fonts`: Noto Serif Display e Montserrat, com licenças OFL.
- `app/icon.png`: favicon com o monograma fornecido.
- `site-input/layout-aprovado.pdf`: referência visual usada.
- `README.md`: execução, deploy e edição.

## Versões e comandos

Next.js 16.3.8, React 19.3.0, Tailwind CSS 4.3.3 e TypeScript 5.9.3. Npm e lockfile incluídos. Execução verificada em Node.js 24.19.0; requisito do Next.js: Node.js 20.9 ou superior. README orienta Node.js 22 ou superior.

```bash
npm ci
npm run dev
npm run build
npm start
npm run typecheck
npm run lint
```

## Integrações e metadados

Nenhuma variável de ambiente ou credencial necessária. Fotos e fontes locais. Metadados em português e idioma `pt-BR`. Domínio/canonical omitidos até confirmação. A indexação começa desativada enquanto a copy e os links estão pendentes; a opção `indexable` controla metadados e robots.txt.

## Verificação

- Instalação npm concluída e lockfile produzido.
- Build de produção aprovado, incluindo a checagem de TypeScript.
- ESLint aprovado, sem erros ou avisos.
- Página revisada em Chromium com larguras de 1440, 768, 390 e 360 px, altura de viewport 1000 px.
- Imagens decodificadas, fontes carregadas, nenhuma âncora sem destino interno e nenhum erro de execução capturado.
- Sem rolagem horizontal nas quatro larguras.
- Menu móvel testado com clique, Escape e seleção de âncora.
- Copy de `config/content.ts` conferida contra o PDF e HTML renderizado.
- Pixels visíveis e transparência de hero e CTA conferidos após conversão WebP sem perdas.

## Pendências autorizadas

Links externos, domínio, destino de “Conheça minha trajetória”, texto de “Clareza e direção” e novo título do CTA final. Estes itens não impedem o build ou o deploy da versão de revisão. Conteúdo dos serviços preservado até receber atualização da Isabella. Nenhum deploy foi realizado.
