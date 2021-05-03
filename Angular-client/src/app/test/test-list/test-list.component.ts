import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from 'src/app/service/test/test.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { Test } from '../Test';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit {

  desc:string='';
  search;
  testList:Test[];

  constructor( private router:Router,private ts:TestService, private tss: TokenStorageService, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(document.body, 'background-color', '#C1F8FF');
    if(this.tss.getToken()){
      this.getList();
    }
    else{
      this.router.navigate(['login']);
    }
  }
  
  getList(){
    this.ts.getAllTest()
      .subscribe((list) =>{
        this.testList=list;
      },
      error =>{
        console.log(error);
      });
    }

    gotoTest(){
      this.router.navigate(['test']);
  
    }

    getTest(id:number){
      this.router.navigate(['testUpdate',id]);
    }

    deletePatient(id:number){
      this.ts.deleteTest(id)
      .subscribe((response)=>{
        console.log(response);
        alert('Test deleted');
        this.getList();
      },
      error =>{
      console.log(error);
    });
  }

}
