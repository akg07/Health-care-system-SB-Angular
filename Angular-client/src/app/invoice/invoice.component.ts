import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bill } from '../bill/Bill';
import { Doctor } from '../doctor/Doctor';
import { Insurance } from '../insurance/Insurance';
import { Patient } from '../patient/Patient';
import { BillService } from '../service/bill/bill.service';
import { TokenStorageService } from '../service/token-storage.service';
import { Test } from '../test/Test';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  id;
  bill: Bill = new Bill();
  doc:Doctor = new Doctor();
  pat: Patient = new Patient();
  ins: Insurance = new Insurance();
  test: Test = new Test();


  constructor(private route:ActivatedRoute, private router: Router, private ts: TokenStorageService, private bs: BillService) { }

  ngOnInit(): void {
    if(this.ts.getToken()){
      if(this.route.snapshot.params['id'] > 0){
      this.id = this.route.snapshot.params['id'];
      this.getDetails();
      }
    }
    else{
      this.router.navigate(['login']);
    }
  }

  getDetails(){
    this.bs.getBillById(this.id)
      .subscribe((data) => {
        this.bill = data;
        this.ins = this.bill.insurance;
        this.pat = this.ins.patient;
        this.doc = this.pat.doc;
        this.test = this.pat.test;
        console.log(this.bill);
      })
  }

  goBack(){
    this.router.navigate(['billList']);
  }

  goHome(){
    this.router.navigate(['home']);
  }
}
