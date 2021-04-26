import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient/Patient';
import { InsuranceService } from '../service/Insurance/insurance.service';
import { TokenStorageService } from '../service/token-storage.service';
import { Insurance } from './Insurance';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {

  ins : Insurance = {
    iNo: null,
    iAmt: null,
    iExpiryDate: '',
    patient: new Patient()
  };
  id;

  constructor(private router : Router, private is:InsuranceService, private route: ActivatedRoute, private tss: TokenStorageService) { }

  ngOnInit(): void {
    if(this.tss.getToken()){
        if(this.route.snapshot.params['id'] > 0){
          this.id = this.route.snapshot.params['id'];
          this.getIns();
        }
    }
    else{
      this.router.navigate(['login']);
    }
  }

  getIns(){
    this.is.getInsuranceById(this.id)
      .subscribe((data) => {
        this.ins = data;
      },
      error => console.log(error));
  }

  onSubmit()
  {
    if(this.id > 0){
      this.update();
    }else{
      this.save();
    }
  }

  update(){
    this.is.updateInsurance(this.id, this.ins)
      .subscribe((response) => {
        console.log(response);
        alert('ins Updated successfully');
      },
      error => console.log(error));
  }
  
  save(){
    this.is.addInsurance(this.ins).subscribe((data)=>
    {
      console.log(data);
      alert("Insurance details added successfully");
      this.gotoNext();
    },
    error => {
      console.log(error);
      alert('cannot save your data');
    });
  
  }
  gotoNext(){
    if(this.id > 0){
      this.router.navigate(['insuranceList']);
    }else{
      this.router.navigate(['insuranceList']);
    }
  }

}
