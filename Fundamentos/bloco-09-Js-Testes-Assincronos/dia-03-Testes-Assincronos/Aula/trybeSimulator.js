const expected = {
  name: 'Matheus Alexandre',
  company: '@betrybe',
  twitter: undefined,
  bio: 'Web Development Student and \r\n' +
  'Summer Student at Trybe. Front-end: React, HTML, JS e CSS. #openToWork',
  location: 'Brazil'
};

const trybeSimulator = (spiedModel, spiedFunction) => {
  const apiURL = jest.spyOn(spiedModel, spiedFunction);
  apiURL.mockResolvedValue(expected);
  return apiURL;
}

module.exports = trybeSimulator;