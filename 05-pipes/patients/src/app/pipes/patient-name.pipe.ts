import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'patientName'
})
export class PatientNamePipe implements PipeTransform {

  transform(name: string): string {
    const [firstName, lastName] = name.split(' ')
    const [firstLetter, ...rest] = firstName.split('')
    console.log(firstLetter, rest)
    return lastName.toUpperCase() + ", " + firstLetter.toUpperCase() + rest.join('')
  }

}
