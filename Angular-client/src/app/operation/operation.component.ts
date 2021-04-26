import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../doctor/Doctor';
import { Patient } from '../patient/Patient';
import { OperationService } from '../service/Opertion/operation.service';
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
  op : Operation = {
    oid: 0,
    oName: '',
    doctor: new Doctor(),
    patient: new Patient() 
  }
  constructor(private router : Router, private os:OperationService, private route:ActivatedRoute, private tss: TokenStorageService) { }

  ngOnInit(): void {
    if(this.tss.getToken()){
      if(this.route.snapshot.params['id'] > 0){
        this.id = this.route.snapshot.params['id'];
        this.btn='Update';
        this.getOperation();
      }
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
      this.router.navigate(['medicos']);
    }
  }

}
