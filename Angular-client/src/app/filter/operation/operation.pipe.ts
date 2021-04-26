import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'operationFilter'
})
export class OperationPipe implements PipeTransform {

  transform(list:any, search:string): any {
    console.log(search);
    if(search){
      return list.filter(row => {
        return (row.oName.toLowerCase().includes(search.toLowerCase())
        || row.doc.doctorName.toLowerCase().includes(search.toLowerCase())
        || row.patient.pName.toLowerCase().includes(search.toLowerCase())
        );
      });
    }
    return list;
  }

}
