

<p align="center">
    <img src="https://github.com/Thalita1415/Desafio-1-1-Primeiros-passos-com-JS/blob/master/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f676f6c64656e2d77696e642f626f6f7463616d702d6c61756e6368626173652f6c6f676f2e706e67.png" alt="Image" width="300" height="190" />
</p>
    
<h2 align="center"> Desafio-1-1-Primeiros-passos-com-JS 
</h2>

### Indice
- [Sobre](https://github.com/Thalita1415/Desafio-1-1-Primeiros-passos-com-JS/blob/master/README.md#rocket-sobre-o-desafio)
- [Cálculo do IMC](https://github.com/Thalita1415/Desafio-1-1-Primeiros-passos-com-JS/blob/master/README.md#muscle-c%C3%A1lculo-de-imc) 
- [Cálculo de aposentadoria](https://github.com/Thalita1415/Desafio-1-1-Primeiros-passos-com-JS/blob/master/README.md#older_woman-c%C3%A1lculo-de-aposentadoria)

### :rocket: Sobre o desafio

Desafios para fortalecer alguns conceitos, entre eles:
- **Variáveis**;
-  **Condicionais**;
-  **Operadores**;

### :muscle: Cálculo de IMC
Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

Comece criando constantes para armazenar o ```nome```, ```peso```, ```altura``` e ```sexo``` de uma pessoa, por exemplo:
```javascript
const nome = "Carlos";
const peso = 84; 
const altura = 1.88; 
```

A partir desses dados armazene em uma constante chamada imc o cálculo do índice de massa corporal definido pela fórmula abaixo:

```
peso / (altura * altura);
```

Baseado no valor obtido através desse cálculo exiba as seguintes mensagens:

-  ```SE``` o IMC maior ou igual a ```30```: Carlos você está acima do peso;
-  ```SE``` o IMC menor que ```29.9```:Carlos você não está acima do peso;


### :older_woman: Cálculo de aposentadoria
Crie um programa para calcular a aposentadoria de uma pessoa.

Obs.: *Esse cálculo é fictício, dentro da aposentadoria existem muitos outros fatores para serem levados em conta :)*

Comece criando constantes para armazenar ```nome```, ```sexo```, ```idade``` e ```contribuicao```(em anos), por exemplo:

```javascript
const nome = "Thalita";
const sexo = "F"; 
const idade = 48; 
const contribuicao = 38; 
````

Baseado nos valores acima utilize as fórmulas a seguir para calcular se a pessoa está apta ou não para se aposentar e no fim imprima uma mensagem em tela.

- O tempo de contribuição mínimo para **homens** é de **35 anos** e, para **mulheres**, **30 anos**;
- Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do **homem** precisa ser de no mínimo 95 anos, enquanto a **mulher** precisa ter no mínimo 85 anos na soma;
</p>
Com base nas regras acima imprima na tela as mensagens:
</p>

- ```SE``` a pessoa estiver aposentada: ```Thalita, você pode se aposentar!```;
- ```SE``` a pessoa NÃO estiver aposentada: ```Thalita, você ainda não pode se aposentar!```;
