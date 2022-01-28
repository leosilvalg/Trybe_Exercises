#### Para fixar

Para realizar o exercício, leia atentamente o enunciado. Após entender o que foi pedido, desenvolva a solução e então verifique se você conseguiu cumprir com o que foi solicitado.

**1** - Para realizar este exercício copie o código  `HTML`  abaixo. Em seguida, faça a implementação das propriedades  `CSS`  e, se necessário, faça adições à estrutura  `HTML`  existente, para que o resultado final seja similar à imagem referência.

-   Lembre-se que a estrutura da página deve ser mantida para que a semântica do código seja preservada.

![](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/fundamentals/html-css/images/podium-final-fdcdc425aade8216b9e3c4b0eab234fc.png)


`index.html`


```html
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ranking</title>
    <style>
      h1 {
        text-align: center;
      }

      .first {
        background-color: rgb(235, 200, 84);
        font-size: 20px;
        height: 50px;
        text-align: center;
        width: 200px;
      }

      .second {
        background-color: rgb(219, 219, 219);
        font-size: 20px;
        height: 50px;
        text-align: center;
        width: 300px;
      }

      .third {
        background-color: rgb(170, 142, 106);
        font-size: 20px;
        height: 50px;
        text-align: center;
        width: 300px;
      }

    </style>
  </head>
  <body>
    <header>
      <h1>Hackathon Results</h1>
    </header>
    <section>
      <ul>
        <li class="first">1º - Equipe 1</li>
        <li class="second">2º - Equipe 2</li>
        <li class="third">3º - Equipe 3</li>
      </ul>
    </section>
    <section>
      <h3>Premiação Primeiro Lugar:</h3>
      <ul>
        <li>| R$ 1000,00 por integrante da equipe |</li>
        <li>| Bootcamp de 2 meses com possibilidade de contratação |</li>
      </ul>
      <h3>Premiação Segundo Lugar:</h3>
      <ul>
        <li>| R$ 600,00 por integrante da equipe |</li>
        <li>| Participação no processo seletivo para o Bootcamp |</li>
      </ul>
      <h3>Premiação Terceiro Lugar:</h3>
      <ul>
        <li>| R$ 300,00 por integrante da equipe |</li>
        <li>| Participação no processo seletivo para o Bootcamp |</li>
      </ul>
    </section>
  </body>
</html>
```