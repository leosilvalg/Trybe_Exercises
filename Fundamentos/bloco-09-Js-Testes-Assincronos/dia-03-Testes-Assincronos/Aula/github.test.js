const github = require('./github');

const { getGitHubUserInfos } = github;

describe('quando chamada, a função getGitHubUserInfos', () => {
  it('deve retornar um objeto contendo  name, company, twitter, bio e location', async () => { //Lembrar de passar o async/await
    const repositoryInfo = await getGitHubUserInfos('alexandremhm');
    const expectedResult = {
      name: 'Matheus Alexandre',
      company: '@betrybe',
      twitter: undefined,
      bio: 'Web Development Student and \r\n' +
      'Summer Student at Trybe. Front-end: React, HTML, JS e CSS. #openToWork',
      location: 'Brazil'
    }
    expect(repositoryInfo).toEqual(expectedResult);
  });
})