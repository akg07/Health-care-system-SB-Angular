import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeFilter'
})
export class EmployeePipe implements PipeTransform {

   transform(list:any, search:string): any {
    console.log(search);
    if(search){
      return list.filter(row => {
        return (row.empName.toLowerCase().includes(search.toLowerCase())
        || row.empAdd.toLowerCase().includes(search.toLowerCase())
        || row.department.deptName.toLowerCase().includes(search.toLowerCase())
        );
      });
    }
    return list;
  }

}
