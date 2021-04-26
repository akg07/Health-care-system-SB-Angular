import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'medicos'
})
export class MedicosPipe implements PipeTransform {

  transform(list:any, search:string): any {
    console.log(search);
    if(search){
      return list.filter(row => {
        return (row.date.toLowerCase().includes(search.toLowerCase())
        || row.mRecord.toLowerCase().includes(search.toLowerCase())
        || row.doctor.doctorName.toLowerCase().includes(search.toLowerCase())
        || row.patient.pName.toLowerCase().includes(search.toLowerCase())
        );
      });
    }
    return list;
  }

}
