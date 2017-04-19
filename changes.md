# VTEX Tachyons

**Versão atual: 4.7.1: Jinx** <br/>
VTEX tachyons é um fork do [projeto original](https://github.com/tachyons-css/).

### Arquitetura

Sua aplicação pode ter até três layers de customização:

1. `tachyons.min.css` acesso a features que o tachyons possui nativamente.
2. `vtex-tachyons` é um cinto de utilidades, extendendo o tachyons para as necessidades dos admins da [VTEX e do Styleguide Onda](https://github.com/vtex/onda)
3. `theme.css` é a ultima camada onde você pode modificar cores, fontes e acrescentar estilos ao invés de herdar das camadas acima.

### Lista de changes

- `{property}-xl` Breakpoint para telas acima de `1600px` na escala em `100em`
- `color-{breakpoint}` cores agora também respeitam breakpoint.
- `fill-{color}` classe de cores para elementos SVG com a propriedade fill.
- `.f7` classe para tamanho de fonte equivalente a `12px` na escala em `.75em`
- `font-display` e `font-body` para familias tipográficas ao inves do nome da fonte

### Apêndice

- `{color}` [lista de cores disponíveis](src/_colors.css)
- `{breakpoint}` [lista de breakpoints disponiveis](src/_media-queries.css)
