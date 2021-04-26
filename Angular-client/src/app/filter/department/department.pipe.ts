import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'departmentFilter'
})
export class DepartmentPipe implements PipeTransform {

  transform(list:any, search:string): any {
    console.log(search);
    if(search){
      return list.filter(row => {
        return (row.deptName.toLowerCase().includes(search.toLowerCase())
      
        );
      });
    }
    return list;
  }

}
