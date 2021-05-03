import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../doctor/Doctor';
import { DoctorService } from '../service/Doctor/doctor.service';
import { PatientService } from '../service/Patient/patient.service';
import { TestService } from '../service/test/test.service';
import { TokenStorageService } from '../service/token-storage.service';
import { Test } from '../test/Test';
import { Patient } from './Patient';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  pat: Patient = new Patient();
  id;
  monthstr:string;
  datstr:string;
  month:any;
  day:any;
  year:any;

  docList: Doctor[];
  testList: Test[];


  constructor(private router: Router,
              private ps: PatientService,
              private route: ActivatedRoute,
              private tss: TokenStorageService,
              private ts: TestService,
              private ds: DoctorService,
              private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(document.body, 'background-color', '#C3E6FC');
    if(this.tss.getToken()){
      if(this.route.snapshot.params['id'] > 0){
        this.id = this.route.snapshot.params['id'];
        this.getPatient();
      }
      this.getDocs();
      this.getTests();
      this.setCal();
    }
    else{
      this.router.navigate(['login']);
    }
  }

  setCal(){
    var dtToday = new Date();
    this.month = dtToday.getMonth() + 1;
    this.day = dtToday.getDate();
    this.year = dtToday.getFullYear().toString();
    if(this.month < 0){
      this.month = '0' + this.month.toString();
    }
    if(this.day < 10){
      this.day = '0' + this.day.toString();
    }
    var maxDate = this.year + '-' + this.month + '-' + this.day;
    console.log(maxDate);
    document.getElementById('pDob').setAttribute('max', maxDate);
  }

  getDocs(){
    this.ds.getAllDoctor()
      .subscribe(list => {
        this.docList = list;
      });
  }

  getTests(){
    this.ts.getAllTest()
      .subscribe(list => {
        this.testList = list;
      });
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
      // this.check();
    }
  }

  check(){
    this.ps.checkIsAvailable(this.pat)
      .subscribe(res => {
        if(!res.available){
          this.save();
        }else{
          alert('patient already regiesterd');
        }
      },
      error => console.log(error));
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
      this.router.navigate(['patientList']);
    }
  }
}
