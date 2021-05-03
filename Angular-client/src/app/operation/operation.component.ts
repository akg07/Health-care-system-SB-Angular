import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../doctor/Doctor';
import { Patient } from '../patient/Patient';
import { DoctorService } from '../service/Doctor/doctor.service';
import { OperationService } from '../service/Opertion/operation.service';
import { PatientService } from '../service/Patient/patient.service';
import { TokenStorageService } from '../service/token-storage.service';
import { Operation } from './Operation';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  id;
  btn='save'
  docList: Doctor[];
  patientList: Patient[];
  op : Operation = new Operation();
  constructor(private router : Router,
    private os:OperationService,
    private route:ActivatedRoute,
    private tss: TokenStorageService,
    private ds: DoctorService,
    private ps: PatientService,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(document.body, 'background-color', '#C3E6FC');
    if(this.tss.getToken()){
      if(this.route.snapshot.params['id'] > 0){
        this.id = this.route.snapshot.params['id'];
        this.btn='Update';
        this.getOperation();
      }
      this.getDocs();
      this.getPatient();
    }
    else{
      this.router.navigate(['login']);
    }
  }

  getOperation(){
    this.os.getOperationById(this.id)
      .subscribe((data) => {
        this.op = data;
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
    this.os.updateOperation(this.id, this.op)
      .subscribe((response) => {
        console.log(response);
        alert('Updated Successfully');
        this.gotoNext();
      },
      error => {
        alert('Not Updated');
        console.log(error);
      })
  }

  save(){
    this.os.addOperation(this.op)
      .subscribe((response) => {
        console.log(response);
        alert('Patient assign to ' + response.oName);
        this.gotoNext();
      },
      error => {
        alert('Not added');
        console.log(error);
      })
  }

  gotoNext(){
    if(this.id > 0){
      this.router.navigate(['operationList']);
    }else{
      this.router.navigate(['operationList']);
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

}
