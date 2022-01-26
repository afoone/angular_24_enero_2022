import { Stock } from './stock';

describe('Stock', () => {
  it('should create an instance', () => {
    expect(new Stock("dumy", "A", 3, 5)).toBeTruthy();
  });
});
