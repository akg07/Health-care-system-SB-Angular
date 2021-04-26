import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'specializationFilter'
})
export class SpecializationPipe implements PipeTransform {

  transform(list:any, search:string): any {
    console.log(search);
    if(search){
      return list.filter(row => {
        return (row.speciality.toLowerCase().includes(search.toLowerCase())
        );
      });
    }
    return list;
  }

}
