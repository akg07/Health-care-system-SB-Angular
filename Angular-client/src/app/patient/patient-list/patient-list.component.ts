import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/service/Patient/patient.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { Patient } from '../Patient';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  desc:string ='';
  search;
  patList: Patient[];

  constructor(private router: Router, private ps: PatientService, private tss: TokenStorageService) { }

  ngOnInit(): void {
    if(this.tss.getToken()){
      this.getList();
    }
    else{
      this.router.navigate(['login']);
    }
  }

  getList(){
    this.ps.getAllPatient()
      .subscribe((list) => {
        this.patList = list;
        console.log(list);
      },
      error => {
        console.log(error);
      });
  }

  getPatient(id:number){
    this.router.navigate(['patientUpdate', id]);
  }

  deletePatient(id: number){
    this.ps.deletePatient(id)
      .subscribe((response) => {
        console.log(response);
        alert('Patient Deleted');
        this.getList();
      },
      error => {
        console.log(error);
      });
  }

  gotoPatient(){
    this.router.navigate(['patient']);
  }

  gotoWard(pat: Patient) {
    console.log(pat);
    this.router.navigateByUrl('/ward', {state: pat});
  }
}
