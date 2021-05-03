import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceService } from 'src/app/service/Insurance/insurance.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { Insurance } from '../Insurance';

@Component({
  selector: 'app-insurance-list',
  templateUrl: './insurance-list.component.html',
  styleUrls: ['./insurance-list.component.css']
})
export class InsuranceListComponent implements OnInit {

  desc:string='';
  search;
  insuranceList: Insurance[];
  
  constructor(private router: Router, private is: InsuranceService, private tss: TokenStorageService,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(document.body, 'background-color', '#C1F8FF');
    if(this.tss.getToken()){
      this.getList();
    }else{
      this.router.navigate(['login']);
    }
  }
  
  gotoInsurance(){
    this.router.navigate(['insurance']);
  }

  getInsurance(id:number){
    this.router.navigate(['insuranceUpdate', id]);
  }

  deleteInsurance(id:number){
    this.is.deleteInsurance(id)
      .subscribe((date) => {
        console.log(date);
        alert('Data Deleted');
        this.getList();
      })
  }

  getList(){
    this.is.getAllInsurance()
      .subscribe((list) => {
        this.insuranceList = list;
      },
      error => console.log(error));
  }

}
