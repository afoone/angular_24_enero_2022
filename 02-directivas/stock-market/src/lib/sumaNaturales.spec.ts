import suma from './sumaNaturales';

describe('sumaNaturales', () => {
  it('si no me pasan los dos parámetros devuelvo undefined', () => {
    expect(suma()).toBeUndefined()
    expect(suma(3)).toBeUndefined()
  });

  it('si me pasan uno de los parámetros como negativo, devuelve undefined', () => {
    expect(suma(0,-1)).toBeUndefined()
    expect(suma(-1,2)).toBeUndefined()
    expect(suma(-1, -1)).toBeUndefined()
  });

  it('si me pasan dos parámetros positivos (o cero) me devuelve un number', () => {
    expect(typeof(suma(0,1))).toBe('number')
    expect(typeof(suma(6,0))).toBe('number')
    expect(typeof(suma(3,4))).toBe('number')
    expect(typeof(suma(0,0))).toBe('number')
  } )

  it('suma correctamente', () => {
    expect(suma(0,0)).toBe(0)
    expect(suma(3,4)).toBe(7)
    expect(suma(10, 1000)).toBe(1010)
  })
})
