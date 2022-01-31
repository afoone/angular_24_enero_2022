import { SumaPipe } from './suma.pipe';

describe('SumaPipe', () => {
  it('create an instance', () => {
    const pipe = new SumaPipe();
    expect(pipe).toBeTruthy();
  });

  it('suma correctamente 100', () => {
    const pipe = new SumaPipe();
    expect(pipe.transform(50, 100)).toBe(150);
  });
});
