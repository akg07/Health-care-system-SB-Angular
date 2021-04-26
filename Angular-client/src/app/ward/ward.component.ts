import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../doctor/Doctor';
import { Patient } from '../patient/Patient';
import { TokenStorageService } from '../service/token-storage.service';
import { WardService } from '../service/Ward/ward.service';
import { Ward } from './Ward';

@Component({
  selector: 'app-ward',
  templateUrl: './ward.component.html',
  styleUrls: ['./ward.component.css']
})
export class WardComponent implements OnInit {

  ward : Ward = {
    wid: 0,
    wardName: '',
    doctor: new Doctor(),
    patient: new Patient()
  }
  id;
  constructor(private router: Router, private ws: WardService, private route: ActivatedRoute, private tss: TokenStorageService) {
    console.log(this.router.getCurrentNavigation().extras.state)
  }


  ngOnInit(): void {
    if(this.tss.getToken()){
      if(history.state){
        this.ward.patient = history.state;
      }
      if (this.route.snapshot.params['id'] > 0) {
        this.id = this.route.snapshot.params['id'];
        this.getWard();
      }
    }
    else{
      this.router.navigate(['login']);
    }
  }

  getWard(){
    this.ws.getWardById(this.id).subscribe((data)=>{
      this.ward=data;
    },
    error=>{
      console.log(error);
    });
  }

  onSubmit(){
	  if(this.id>0){
      this.update();
    }else{
      this.save();
    }
  }

  update(){
    this.ws.updateWard(this.id, this.ward).subscribe((data)=>{
        console.log(data);
        alert("Patient admited to the ward + " + data.wid);
        this.gotoNext();
    },
      error => {
        console.log(error);
        alert('cannot save your data');
      });
  }

  save(){
    this.ws.addWard(this.ward).subscribe((data)=>{
      console.log(data);
      alert("Patient admited to the ward + " + data.wid);
      this.gotoNext();
    },
    error => {
      console.log(error);
      alert('can not save your data');
    });
  }

  gotoNext(){
    if(this.id > 0){
      this.router.navigate(['wardList']);
    }else{
      this.router.navigate(['operation']);
    }
  }

}
