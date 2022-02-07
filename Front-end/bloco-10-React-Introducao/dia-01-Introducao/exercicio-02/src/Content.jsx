import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      <section className="content">
        {conteudos.map((index) => {
          return (
          <section key={index}>
            <h3>O conteúdo é: {index.conteudo}</h3>
            <p>Status: {index.status}</p>
            <p>Bloco: {index.bloco}</p>
          </section>
          )
        })}
      </section>
    )
  }
}

export default Content