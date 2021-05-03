import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../doctor/Doctor';
import { DoctorService } from '../service/Doctor/doctor.service';
import { TestService } from '../service/test/test.service';
import { TokenStorageService } from '../service/token-storage.service';
import { Test } from './Test';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  test : Test = new Test();
  id;
  doctorList: Doctor[];

  constructor(private router: Router,private ts:TestService,private route:ActivatedRoute, private tss: TokenStorageService, private ds: DoctorService,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(document.body, 'background-color', '#C3E6FC');
    if(this.tss.getToken()){
      if(this.route.snapshot.params['id']>0){
        this.id=this.route.snapshot.params['id'];
        this.getTest();
      }
      this.getDoctorList();
    }
    else{
      this.router.navigate(['login']);
    }
  }

  getDoctorList(){
    this.ds.getAllDoctor()
      .subscribe(list => {
        this.doctorList = list;
      });
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
