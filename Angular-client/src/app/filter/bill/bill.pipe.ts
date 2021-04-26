import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'billFilter'
})
export class BillPipe implements PipeTransform {

  transform(list:any, search:string): any {
    console.log(search);
    if(search){
      return list.filter(row => {
        return (
        row.patient.pName.toLowerCase().includes(search.toLowerCase())
        );
      });
    }
    return list;
  }

}
