const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };
  
  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

  const estudantes = (obj) => {
      total = 0;
      const array = Object.keys(obj);
      for( i in array) {
          if(obj[array[i]].materia === 'Matemática') {
              total += obj[array[i]].numeroEstudantes;
          }
      }
      return total;
  }

console.log(estudantes(allLessons));