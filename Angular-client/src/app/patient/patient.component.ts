import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../doctor/Doctor';
import { PatientService } from '../service/Patient/patient.service';
import { TokenStorageService } from '../service/token-storage.service';
import { Test } from '../test/Test';
import { Patient } from './Patient';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  pat: Patient = {
    pid: null,
    pName: '',
    pMobileNo: null,
    pAdd: '',
    pDob: null,
    doc: new Doctor(),
    test: new Test()
  };

  id;

  constructor(private router: Router, private ps: PatientService, private route: ActivatedRoute, private tss: TokenStorageService) { }

  ngOnInit(): void {
    if(this.tss.getToken()){
      if(this.route.snapshot.params['id'] > 0){
        this.id = this.route.snapshot.params['id'];
        this.getPatient();
      }
    }
    else{
      this.router.navigate(['login']);
    }
  }

  getPatient(){
    this.ps.getPatientById(this.id)
      .subscribe((data) => {
        this.pat = data;
      },
      error => {
        console.log(error);
      });
  }

  onSubmit(){
    if(this.id > 0){
      // update
      this.update();
    }else{
      // save
      this.save();
    }
  }

  update(){
    this.ps.updatePatient(this.id, this.pat)
      .subscribe((data) => {
        console.log(data);
        alert("patient updated successfully");
        this.gotoNext();
      },
      error => {
        console.log(error);
        alert('can not updated your data');
      });
  }

  save(){
    this.ps.addPatient(this.pat)
      .subscribe((data) => {
        console.log(data);
        alert("patient Registerd successfully");
        this.gotoNext();
      },
      error => {
        console.log(error);
        alert('can not save your data');
      });
  }

  gotoNext(){
    if(this.id > 0){
      this.router.navigate(['patientList']);
    }else{
      this.router.navigate(['ward']);
    }
  }
}
