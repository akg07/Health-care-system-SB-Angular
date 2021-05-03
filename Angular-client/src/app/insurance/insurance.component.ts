import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient/Patient';
import { InsuranceService } from '../service/Insurance/insurance.service';
import { PatientService } from '../service/Patient/patient.service';
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
  patList: Patient[];

  constructor(private router : Router,
    private is:InsuranceService,
    private route: ActivatedRoute,
    private tss: TokenStorageService,
    private ps: PatientService,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(document.body, 'background-color', '#C3E6FC');
    if(this.tss.getToken()){
        if(this.route.snapshot.params['id'] > 0){
          this.id = this.route.snapshot.params['id'];
          this.hide();
          this.getIns();
        }
        this.getPats();
    }
    else{
      this.router.navigate(['login']);
    }
  }

  hide(){
    if(this.id > 0){
      document.getElementById("hide").style.display = 'none';
    }
  }

  getPats(){
    this.ps.getAllPatient()
      .subscribe(list => {
        this.patList = list;
      })
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
