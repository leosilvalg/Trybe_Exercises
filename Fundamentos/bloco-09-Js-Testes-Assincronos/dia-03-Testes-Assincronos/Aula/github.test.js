const github = require('./github');

const { getGitHubUserInfos } = github;

decribe('quando chamada, a função getGitHubUserInfos', () => {
  it('deve retornar um objeto contendo  name, company, twitter, bio e location', () => {
    expect(getGitHubUserInfos('alexandremhm')).toEqual({
      name: 'Matheus Alexandre',
      company: '@betrybe',
      twitter: undefined,
      bio: 'Web Development Student and \r\n' +
      'Summer Student at Trybe. Front-end: React, HTML, JS e CSS. #openToWork',
      location: 'Brazil'
    });
  });
})