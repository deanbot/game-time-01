global.document.getElementById = jest.fn((id) => ({
  id: id
}));

global.document.addEventListener = jest.fn((event, fn) => { }); //eslint-disable-line no-unused-vars
