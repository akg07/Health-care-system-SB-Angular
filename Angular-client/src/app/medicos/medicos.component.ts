import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../doctor/Doctor';
import { Patient } from '../patient/Patient';
import { DoctorService } from '../service/Doctor/doctor.service';
import { MedicosService } from '../service/medicos/medicos.service';
import { PatientService } from '../service/Patient/patient.service';
import { TokenStorageService } from '../service/token-storage.service';
import { Medicos } from './Medicos';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {

  id;
  btn='save';
  med: Medicos = new Medicos();
  docList: Doctor[];
  patientList: Patient[];
  // med: Medicos = {
  //   mId: 0,
  //   mRecord: '',
  //   date: null,
  //   doctor: new Doctor(),
  //   patient: new Patient()
  // }
  constructor(private router:  Router, private ms: MedicosService, private route: ActivatedRoute, private tss: TokenStorageService,
    private ds: DoctorService,
    private ps: PatientService,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(document.body, 'background-color', '#C3E6FC');
    if(this.tss.getToken()){
      if(this.route.snapshot.params['id'] > 0){
        this.id = this.route.snapshot.params['id'];
        this.btn='Update';
        this.getMedicos();
      }
      this.getPatient();
      this.getDocs();
    }
    else{
      this.router.navigate(['login']);
    }
  }

  getDocs(){
    this.ds.getAllDoctor()
      .subscribe(list => {
        this.docList = list;
      });
  }

  getPatient(){
    this.ps.getAllPatient()
      .subscribe(list => {
        this.patientList = list;
      });
  }

  getMedicos(){
    this.ms.getMedicosById(this.id)
      .subscribe((data) => {
        this.med = data;
      },
      error => {
        console.log(error);
      });
  }


  onSubmit() {
    if(this.id > 0){
      this.update();
    }else{
      this.save();
    }
    
  }

  update(){
    this.ms.updateMedicos(this.id, this.med)
      .subscribe((response) => {
        console.log(response);
        alert('Medicos ' + response.mId + " Updated");
        this.gotoNext();
      },
      error => {
        alert('Not Updated');
        console.log(error);
      })
  }

  save(){
    this.ms.addMedicos(this.med)
      .subscribe((response) => {
        console.log(response);
        alert('Medicos ' + response.mId + " Added");
        this.gotoNext();
      },
      error => {
        alert('Not added');
        console.log(error);
      })
  }

  gotoNext(){
    if(this.id > 0){
      this.router.navigate(['medicosList']);
    }else{
      this.router.navigate(['medicosList']);
    }
  }
}
