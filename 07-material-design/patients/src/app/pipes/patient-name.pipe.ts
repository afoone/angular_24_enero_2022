import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'patientName'
})
export class PatientNamePipe implements PipeTransform {

  transform(name: string): string {
    const [firstName, lastName] = name.split(' ')
    if (!lastName) return firstName

    return lastName?.toUpperCase() + (lastName && ", ") + firstName[0]?.toUpperCase() + firstName.slice(1)
  }

}
