function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Exercício 1 - Colocar os dias no calendário e suas devidas classes.
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function DaysList(){
     
      let listaDeDias = document.querySelector('#days');

      for(let i in dezDaysList){

          const dia = dezDaysList[i];
          const diaItem = document.createElement('li');

          if(dia === 24 || dia === 31){
              diaItem.className = 'day holiday';
              diaItem.innerHTML = dia;
              listaDeDias.appendChild(diaItem);
          } else if (dia === 25){
              diaItem.className = 'day holiday friday';
              diaItem.innerHTML = dia;
              listaDeDias.appendChild(diaItem);
          } else if (dia === 4 || dia === 11 || dia == 18){
              diaItem.className = 'day friday';
              diaItem.innerHTML = dia;
              listaDeDias.appendChild(diaItem);
          } else {
              diaItem.className = 'dia';
              diaItem.innerHTML = dia;
              listaDeDias.appendChild(diaItem);
          }
      };

  };
  DaysList();

//Criação do botão "Feriados"
function feriado(){
    //Primeiro seleciono o elemento Pai
    let botao = document.querySelector('.buttons-container');
    //Então crio o novo elemento.
    let novoBotao = document.createElement('button');
  

    novoBotao.innerHTML = 'Feriados';
    novoBotao.id = 'btn-holiday';
    //Mostro o novo elemento criado a partir da Tag pai.
    botao.appendChild(novoBotao);
};
feriado();

//Adicionando um click ao botão feriados
function adicionaClick(){
    const click = document.getElementById('btn-holiday');
    const feriados = document.querySelectorAll('.holiday');
    const corDeFundo = 'rgb(238,238,238)';
    const novaCor = 'red';

    click.addEventListener('click', function(){
        for(let i in feriados){
            if(feriados[i].style.backgroundColor === novaCor){
                feriados[i].style.backgroundColor = corDeFundo;
            } else {
                feriados[i].style.backgroundColor = novaCor;
            }
        }
    })

};
adicionaClick()

//Função para Sexta feira
function sextaFeira(){
    //Selecionando o elemento pai
    let botaoSexta = document.querySelector('.buttons-container');
    //Criando o novo botão
    let novoBotaoSexta = document.createElement('button');

    novoBotaoSexta.innerHTML = 'Sexta-feira';
    novoBotaoSexta.id = 'btn-friday';

    botaoSexta.appendChild(novoBotaoSexta);
};
sextaFeira()

//Adicionando o evento click ao botão sexta feira
let friday = [4, 11, 18, 25]

function adicionaClickSexta(){
    const click = document.getElementById('btn-friday');
    const sexta = document.getElementsByClassName('friday');
    const dia = 'dia';
    const novaFrase = 'Sextou!';

    click.addEventListener('click', function(){
        for(let i in sexta){
            if(sexta[i].innerHTML !== novaFrase){
                sexta[i].innerHTML = novaFrase;
            }else{
                sexta[i].innerHTML = friday[i];
            }
        }
    })
};
adicionaClickSexta();

//Criando o efeito zoom nos dias do calendário
function mousePassa(){
    const dia = document.getElementById('days');

    dia.addEventListener('mouseover', function(event){
        event.target.style.fontSize = '30px';
    })
};

function mouseSai(){
    const dia = document.getElementById('days');

    dia.addEventListener('mouseout', function(event){
        event.target.style.fontSize = '20px';
    })

};
mousePassa();
mouseSai();

//Criando uma tarefa personalizada
function tarefaPersonalizada(){

    let tarefas = document.querySelector('.my-tasks');

    let tarefa = document.createElement('span');

    tarefa.innerHTML = 'Afazeres diários';
    
    tarefas.appendChild(tarefa);
};
tarefaPersonalizada();

//uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior
function corDeFundo(){
    let tarefas = document.querySelector('.my-tasks');
    let novaTarefa = document.createElement('div');

    novaTarefa.className = 'task';
    novaTarefa.style.backgroundColor = 'green';
    tarefas.appendChild(novaTarefa);
};
corDeFundo();

//Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
function evento() {
    let tarefas = document.getElementsByClassName('task select');
    let tarefa = document.querySelector('.tech');
    
    tarefa.addEventListener('click', function(event){
        if(tarefas.length === 0){
            event.target.className = 'task selected'
        } else {
            event.target.className = 'task';
        }
    });
};

evento();

//Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
