# Revisão visual — 01/10/2026

Status: **aprovado para apresentação, com placeholders autorizados**.

Referência: `site-input/layout-aprovado.pdf`. Rota: `/`. Capturas da versão de produção, após carregamento de fontes e imagens e percurso completo da página. Viewports: 1440 × 1000, 768 × 1000, 390 × 1000 e 360 × 1000.

## Evidências

- [Desktop, 1440 px](previews/desktop-1440.jpg)
- [Tablet, 768 px](previews/tablet-768.jpg)
- [Celular, 390 px](previews/mobile-390.jpg)
- [Celular, 360 px](previews/mobile-360.jpg)
- `browser-checks.json`: dimensões, carregamento, âncoras e erros de execução.

| ID | Severidade | Rota / viewport | Evidência e problema | Correção | Status |
| --- | --- | --- | --- | --- | --- |
| V01 | Importante | / — 390 e 360 | Foto maior encobria parte das palavras decorativas | Mais espaço à esquerda, tipografia decorativa vetorial e recorte responsivo | Corrigido |
| V02 | Importante | / — 768 | CTA em duas colunas fazia o texto atravessar a foto e removia parte do fade pelo crop | Foto abaixo do texto, sem crop lateral no tablet | Corrigido |
| V03 | Refinamento | / — 390 e 360 | Quebras do título juntavam frases em linhas pouco claras | Quatro grupos do título com tamanho proporcional à largura | Corrigido |
| V04 | Refinamento | / — tablet/celular | Borda superior da foto do CTA aparecia na composição vertical | Pequena transição de transparência acima do rosto | Corrigido |
| V05 | Importante | / — 768 | Composição larga do hero aproximava a copy da foto e expunha o limite inferior do crop | Hero em fluxo vertical, fotografia continuando sob as curvas | Corrigido |

## Resultado

Desktop mantém a composição editorial do PDF: título à esquerda, retrato amplo, monograma, dupla curva, manifesto central, fotos sobrepostas, serviços em lista, quatro pilares e CTA branco com oliva. A altura total no desktop é 5448 px, próxima aos 5410 pontos da referência longa. Tablet e celular preservam o conteúdo em composições adaptadas.

As fotografias são originais. Nenhuma imagem generativa foi utilizada. Hero e CTA preservam os pixels visíveis das composições aprovadas; os ajustes são enquadramento, transparência e layout.

Navegação interna e menu móvel utilizáveis; Escape fecha o menu e devolve o foco. Os destinos externos permanecem desabilitados conforme solicitado. Foco visível e alternativa de movimento reduzido presentes. Não foram feitas auditoria completa WCAG, medição de Core Web Vitals com usuários reais ou verificação em todos os navegadores.

Pendências de conteúdo continuam sinalizadas: “Clareza e direção” e título final. Sem bloqueadores visuais ou problemas importantes em aberto nas larguras revisadas.
