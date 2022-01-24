/* Expected
 {
  N: [
    { city: 'Manaus', state: 'Amazonas' },
    { city: 'Belém', state: 'Pará' },
    { city: 'Porto Nacional', state: 'Tocantins' }
  ],
  SE: [
    { city: 'Lavras', state: 'Minas Gerais' },
    { city: 'Presidente Prudente', state: 'São Paulo' }
  ],
  NE: [
    { city: 'Feira de Santana', state: 'Bahia' },
    { city: 'Touros', state: 'Rio Grande do Norte' },
    { city: 'Jericoacoara', state: 'Ceará' }
  ],
  S: [ { city: 'Cascavel', state: 'Paraná' } ],
}*/

const {regions, states, cities} = require('./data');

function qualEstado (sigla) {
  return states.find((state) => state.short === sigla);
}                                                             // Segunda etapa. Captura apenas o nome do estado;

function filtraCidade (sigla) {
  return cities.filter((cidedade) => cidedade.region === sigla);
}

function mapCities () {
  const retorno = {};
  regions.forEach((regiao) => {
    if (filtraCidade(regiao.short).length > 0) {
    retorno[regiao.short] = filtraCidade(regiao.short).map((cidade) => {
      return {
        city: cidade.name,
        state: qualEstado(cidade.state).name
      }
    });
    }                                                     
  });
  console.table(retorno);
}
mapCities();