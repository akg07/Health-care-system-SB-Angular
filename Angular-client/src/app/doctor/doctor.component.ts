import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../department/Department';
import { DepartmentService } from '../service/department/department.service';
import { DoctorService } from '../service/Doctor/doctor.service';
import { SpecializationService } from '../service/Specialization/specialization.service';
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

  doc : Doctor = new Doctor();
  spec: Specialization = new Specialization();
  dept: Department = new Department();

  deptList: Department[];
  specList: Specialization[];
  id;
  constructor(private router: Router, private ds: DoctorService, private route: ActivatedRoute, private tss: TokenStorageService, private spSer: SpecializationService, private deptSer: DepartmentService,
    private renderer: Renderer2) { }
  
  ngOnInit(): void {
    this.renderer.setStyle(document.body, 'background-color', '#C3E6FC');
    if(this.tss.getToken()){
      if (this.route.snapshot.params['id'] > 0) {
        this.btn = 'Update';
        this.id = this.route.snapshot.params['id'];
        this.getDoctor();
      }
      this.getDept();
      this.getSpec();
    }else{
      this.router.navigate(['login']);
    }
  }

  getDept(){
    this.deptSer.getAllDepartment()
      .subscribe(list => {
        this.deptList = list;
      });
  }

  getSpec(){
    this.spSer.getAllSpecialization()
      .subscribe(list => {
        this.specList = list;
      });
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
      // this.save();
      console.log(this.doc);
      this.check();
    }
  }
  update()
  {
    this.ds.updateDoctor(this.id, this.doc).subscribe((data)=>
      {
        console.log(data);
        alert("Doctor updated successfully");
        this.gotoNext();
      },
      error => {
        console.log(error);
        alert("can't update your data");
      });
  }

  check(){
    this.ds.checkIsAvailable(this.doc)
      .subscribe(res => {
        console.log(res.available);
        if(!res.available){
          this.save();
        }else{
          alert('Doctor already exists');
        }
      },
      error => console.log(error));
  }

  save(){
    this.ds.addDoctor(this.doc).subscribe((data)=>{
      console.log(data);
      alert("Doctor added successfully");
      this.gotoNext();
    },
    error => {
      console.log(error);
      alert('can not save your data');
    });
  }

  gotoNext(){
    this.router.navigate(['doctorList']);
  }

  reset(){
    this.doc.doctorName = null;
    this.doc.doctorPhoneNO = null;
    this.doc.doctorAddress = null;
    this.doc.department.deptId = null;
    this.doc.specialization.specId = null;
  }

}
