import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Insurance } from '../insurance/Insurance';
import { Patient } from '../patient/Patient';
import { BillService } from '../service/bill/bill.service';
import { InsuranceService } from '../service/Insurance/insurance.service';
import { PatientService } from '../service/Patient/patient.service';
import { TokenStorageService } from '../service/token-storage.service';
import { Bill } from './Bill';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  btn = 'save';
  bill: Bill = {
    bId: null,
    bAmt: null,
    billDate: null,
    isInsuared: true,
    insurance: new Insurance(),
    patient: new Patient()
  }
  patientList: Patient[];
  insList: Insurance[];
  id;

  constructor(private bs: BillService,
    private router: Router,
    private route: ActivatedRoute,
    private ts: TokenStorageService,
    private ps: PatientService,
    private is: InsuranceService,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(document.body, 'background-color', '#C3E6FC');
    if(this.ts.getToken()){
      this.getForm();
      this.getIns();
      this.getPatients();
    }else{
      this.router.navigate(['login']);
    }
  }

  getPatients(){
    this.ps.getAllPatient()
      .subscribe(list => {
        this.patientList = list;
      });
  }

  getIns(){
    this.is.getAllInsurance()
      .subscribe(list => {
        this.insList = list;
      });
  }

  getForm(){
    if(this.route.snapshot.params['id'] > 0){
      this.id = this.route.snapshot.params['id'];
      this.btn='update';
      this.getBill();
    }
  }

  getBill(){
    this.bs.getBillById(this.id)
      .subscribe((data) => {
        this.bill = data;
      },
      error => console.log(error));
  }

  onSubmit(){
    console.log(this.bill);
    console.log(this.id);
    
    if(this.id > 0) {
      this.update();
    }else{
      console.log(this.bill);
      this.save();
    }
  }

  update(){
    this.bs.updateBill(this.id, this.bill)
      .subscribe((response) => {
        console.log(response);
        alert('Bill updated');
        this.gotoNext();
      },
      error => {
        console.log(error);
        alert('can not update')
      });
  }

  save(){
    this.bs.addBill(this.bill)
      .subscribe((response) => {
        console.log(response);
        alert('Bill Generated');
        this.gotoNext();
      },
      error => {
        console.log(error);
        alert('can not save')
      });
  }

  gotoNext(){
    if(this.id > 0){
      this.router.navigate(['invoice', this.id]);
    }else{
      this.router.navigate(['invoice', this.bill.bId]);
    }
  }
}
