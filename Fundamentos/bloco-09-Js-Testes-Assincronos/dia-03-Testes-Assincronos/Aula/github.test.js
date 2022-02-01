const github = require('./github');

// const { getGitHubUserInfos } = github; // função real

const trybeSimulator = require('./trybeSimulator'); // Função simuladora

const expectedResult = {
  name: 'Matheus Alexandre',
  company: '@betrybe',
  twitter: undefined,
  bio: 'Web Development Student and \r\n' +
  'Summer Student at Trybe. Front-end: React, HTML, JS e CSS. #openToWork',
  location: 'Brazil'
}

describe('quando chamada, a função getGitHubUserInfos', () => {
  it('deve retornar um objeto contendo  name, company, twitter, bio e location', async () => { //Lembrar de passar o async/await

    trybeSimulator(github, 'getGitHubUserInfos');
    const { getGitHubUserInfos } = github; // Colocar a 'função real' aqui para simular

    const repositoryInfo = await getGitHubUserInfos('alexandremhm');
    expect(repositoryInfo).toEqual(expectedResult);
  });
})