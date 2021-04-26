import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testFilter'
})
export class TestPipe implements PipeTransform {

  transform(list:any, search:string): any {
    console.log(search);
    if(search){
      return list.filter(row => {
        return (row.tName.toLowerCase().includes(search.toLowerCase())
        || row.doctor.doctorName.toLowerCase().includes(search.toLowerCase())
        || row.tDate.toLowerCase().includes(search.toLowerCase())
        );
      });
    }
    return list;
  }

}
