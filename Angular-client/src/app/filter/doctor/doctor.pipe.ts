import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doctorFilter'
})
export class DoctorPipe implements PipeTransform {

  transform(list:any, search:string): any {
    console.log(search);
    if(search){
      return list.filter(row => {
        return (row.doctorName.toLowerCase().includes(search.toLowerCase())
        || row.doctorAddress.toLowerCase().includes(search.toLowerCase())
        || row.department.deptName.toLowerCase().includes(search.toLowerCase())
        || row.specialization.speciality.toLowerCase().includes(search.toLowerCase())
        );
      });
    }
    return list;
  }

}
