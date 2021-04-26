import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'patientFilter'
})
export class PatientPipe implements PipeTransform {

  transform(list:any, search:string): any {
    console.log(search);
    if(search){
      return list.filter(row => {
        return (row.pName.toLowerCase().includes(search.toLowerCase())
        || row.doc.doctorName.toLowerCase().includes(search.toLowerCase())
        || row.test.tName.toLowerCase().includes(search.toLowerCase())
        );
      });
    }
    return list;
  }

}
