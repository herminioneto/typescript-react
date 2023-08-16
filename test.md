## 1. 
Em linguagens com tipagem dinâmica, não precisamos explicitar os tipos dos valores (valor de uma variável ou retorno de uma
função, por exemplo.), sendo esses reconhecidos dinamicamente pela linguagem. Já nas com tipagem estática, precisamos explicitar
os tipos. Por exemplo, uma variável que recebe um número pode ser do tipo inteiro ou float (valor com casas decimais), e esse
tipo deve ser explicitado no momento da declaração dessa variável. Algumas linguagens ainda possuem o recurso de inferência de
tipos, como o TypeScript, onde o tipo de uma variável é determinado pelo valor que você atribui durante a inicialização.

## 2. 
O principal problema se encontra no fato de que linguagens dinamicamente tipadas permitem que você reatribua o valor de uma
variável com outro tipo, o que pode tornar o código mais facilmente suscetível a erros, principalmente em projetos com muitas
linhas.

## 3. 
Suponha que estejamos trabalhando em um sistema de gerenciamento de estoque de uma loja. Temos uma variável chamada 
quantidadeProdutos que armazena a quantidade de produtos em estoque. Inicialmente, essa variável contém um valor numérico, 
digamos, 100 (usarei JavaScript como exemplo):

`let quantidadeProdutos = 100;`

Agora, imagine que em algum ponto do código, acidentalmente reatribuimos um valor diferente à variável quantidadeProdutos, 
mas dessa vez como uma string:

`quantidadeProdutos = "50";`

Devido à tipagem dinâmica, essa reatribuição não resultaria em um erro imediato. No entanto, mais tarde no código, quando
tentarmos realizar operações matemáticas ou comparações usando essa variável, os resultados serão inesperados:

`let totalVenda = quantidadeProdutos * 10;`

Isso resultaria em um erro devido à multiplicação de uma string por um número. Neste exemplo, a tipagem dinâmica permitiu que 
uma variável originalmente numérica se tornasse uma string sem aviso prévio, levando a erros sutis e difíceis de identificar. Isso
pode impactar negativamente a funcionalidade do programa e causar confusão na depuração.
