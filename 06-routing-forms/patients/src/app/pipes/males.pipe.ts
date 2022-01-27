import { Pipe, PipeTransform } from '@angular/core';
import { Patient } from '../models/patient';

@Pipe({
  name: 'males',
})
export class MalesPipe implements PipeTransform {
  transform(patiens: Array<Patient>, isMale: boolean): Array<Patient> {
    return patiens.filter((p) => p.sex === (isMale ? 'M' : 'F'));
  }
}
