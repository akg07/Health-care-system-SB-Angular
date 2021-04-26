import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../doctor/Doctor';
import { TestService } from '../service/test/test.service';
import { TokenStorageService } from '../service/token-storage.service';
import { Test } from './Test';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  test : Test = {
    tid: 0,
    tName: '',
    tDate: '',
    doctor: new Doctor()
  }
   id;
  constructor(private router: Router,private ts:TestService,private route:ActivatedRoute, private tss: TokenStorageService) { }

  ngOnInit(): void {
    if(this.tss.getToken()){
      if(this.route.snapshot.params['id']>0){
        this.id=this.route.snapshot.params['id'];
        this.getTest();
      }
    }
    else{
      this.router.navigate(['login']);
    }

  }
  getTest(){
    this.ts.getTestById(this.id).subscribe((data)=>{
      this.test=data;
  },
  error=>{
    console.log(error);
  });
}

  onSubmit() {
    console.log(this.test);
    this.save();
    
  }

  save(){
    this.ts.addTest(this.test)
      .subscribe((data) => {
        console.log(data);
        alert("Test Added successfully");
        this.gotoNext();
      },
      error => {
        console.log(error);
        alert('can not save your data');
      })
  }
      

  gotoNext(){
    this.router.navigate(['testList']);
  }

}
