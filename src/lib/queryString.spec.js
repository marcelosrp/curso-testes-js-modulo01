const { queryString } = require('./queryString');

describe('Object to query sting', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Marcelo',
      profession: 'frontend',
    };

    expect(queryString(obj)).toBe('name=Marcelo&profession=frontend');
  });
});
