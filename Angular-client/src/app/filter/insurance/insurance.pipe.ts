import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'insuranceFilter'
})
export class InsurancePipe implements PipeTransform {

   transform(list:any, search:string): any {
    console.log(search);
    if(search){
      return list.filter(row => {
        return (row.iExpiryDate.toLowerCase().includes(search.toLowerCase())
        || row.patient.pName.toLowerCase().includes(search.toLowerCase())
       
        );
      });
    }
    return list;
  }

}
