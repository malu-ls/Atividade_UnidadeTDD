# Validando Palíndromo
## _Desenvolvendo um validador de Palíndromo com base em TDD_


Atividade desenvolvida com base em TDD para avaliação da matéria Automated Software Testing.
O professor nos deu uma lista de palavras para validação dos testes, a mesma esta realacionada abaixo
### Critério de Aceite
#### Verdadeiro:
- “Rotator”
- “bob”
- “madam”
- “mAlAyAlam”
- “1”
- “Able was I, ere I saw Elba”
- “Madam I’m Adam”
- “Step on no pets.”
- “Top spot!”
- “02/02/2020”
#### Falso
- “xyz”
- “elephant”
- “Country”
- “Top . post!”
- “Wonderful-fool”
- “Wild imagination!”
## Para rodar os testes:
Os testes foram desenvolvido em Javascript com base em NodeJS. Os testes podem ser rodados via terminal com os comandos:

 ` yarn test ` ou `npm teste `

## Installation

Para a instalação das dependencias utilziadas no projeto você pode rodar o comando:
`yarn add all`

![](https://raw.githubusercontent.com/MaluDev/Atividade_UnidadeTDD/master/Install_Dependecies.png)


## Resultado dos Testes

Rodando via `yarn test` :

![](https://raw.githubusercontent.com/MaluDev/Atividade_UnidadeTDD/master/Tests_YarnTest.png)

Rodando via `npm test` :

![](https://raw.githubusercontent.com/MaluDev/Atividade_UnidadeTDD/master/Tests_NpmTest.png)

### Duvida encontrada no desenvolvimento da atividade:
Na hora da validação das Palavras, algumas palavras se mantêm a pontuação, elas não passam pelo testes, dado os exemplos:
- Able was I, ere I saw Elba
- Madam I'm Adam
- Step on no pets.
- Top spot!
- 02/02/2020

Não encontrei uma resolução para que ele passasse pelos testes sem com que a pontuação intervisse nos resultados.

![](https://github.com/MaluDev/Atividade_UnidadeTDD/blob/master/Error_Pontua%C3%A7%C3%A3o.png?raw=true)


## Autor 
_Maria Luiza Lopes Silva_
_RA: 1903331_

## License

MIT
