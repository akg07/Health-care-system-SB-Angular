import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../department/Department';
import { DoctorService } from '../service/Doctor/doctor.service';
import { TokenStorageService } from '../service/token-storage.service';
import { Specialization } from '../specialization/Specialization';
import { Doctor } from './Doctor';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  btn = 'save';

  doc : Doctor = {
    doctorId:null,
    doctorName: '',
    doctorPhoneNO: null,
    doctorAddress: '',

    department: new Department(),
    specialization: new Specialization()
  }

  id;
  constructor(private router: Router, private ds: DoctorService, private route: ActivatedRoute, private tss: TokenStorageService) { }
  
  ngOnInit(): void {
    if(this.tss.getToken()){
      if (this.route.snapshot.params['id'] > 0) {
        this.btn = 'Update';
        this.id = this.route.snapshot.params['id'];
        this.getDoctor();
      }
    }else{
      this.router.navigate(['login']);
    }
  }

  getDoctor(){
    this.ds.getDoctorById(this.id).subscribe((data)=>{
      this.doc=data;
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
  update()
  {
    this.ds.updateDoctor(this.id, this.doc).subscribe((data)=>
      {
        console.log(data);
        alert("docotr updated successfully");
        this.gotoNext();
      },
      error => {
        console.log(error);
        alert('cannot save your data');
      });
  }
  save(){
    this.ds.addDoctor(this.doc).subscribe((data)=>
    {
      console.log(data);
      alert("doctor added successfully");
      this.gotoNext();
    },
    error => {
      console.log(error);
      alert('can not save your data');
    });
  }
  gotoNext()
  {
    this.router.navigate(['doctorList']);
  }

}
