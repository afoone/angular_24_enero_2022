import { PatientNamePipe } from './patient-name.pipe';

describe('PatientNamePipe', () => {
  it('create an instance', () => {
    const pipe = new PatientNamePipe();
    expect(pipe).toBeTruthy();
  });

  it('works with a simple name and surname' ,
   () => {
     const pipe = new PatientNamePipe();
     expect(pipe.transform("Alfonso Tienda")).toBe("TIENDA, Alfonso")
   }
  )

  it('works with a simple name and surname in lowercase' ,
  () => {
    const pipe = new PatientNamePipe();
    expect(pipe.transform("julia lópez")).toBe("LÓPEZ, Julia")
  }
 )

 it('works with a just one name' ,
  () => {
    const pipe = new PatientNamePipe();
    expect(pipe.transform("Alfonso")).toBe("Alfonso")
  }
 )
});
