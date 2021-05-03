import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../department/Department';
import { DepartmentService } from '../service/department/department.service';
import { EmployeeService } from '../service/Employee/employee.service';
import { TokenStorageService } from '../service/token-storage.service';
import { Employee } from './Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  emp: Employee = {
    empId: 0,
    empName: '',
    empMobileNo: 0,
    empAdd: '',
    department: new Department()
  }

  isLoggedIn = false;
  showAdminBoard = false;
  private roles: string[];
  deptList: Department[];

  id;
  constructor(private router: Router,
    private es: EmployeeService,
    private route: ActivatedRoute,
    private tss: TokenStorageService,
    private ds: DepartmentService,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(document.body, 'background-color', '#C3E6FC');
    this.isLoggedIn = !!this.tss.getToken();
    if (this.isLoggedIn) {
      const user = this.tss.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.getform();
      this.getDepts();
    }
    else{
      this.router.navigate(['login']);
    }
  }

  getDepts(){
    this.ds.getAllDepartment()
      .subscribe(list => {
        this.deptList = list;
      });
  }

  getform(){
    if(this.route.snapshot.params['id']>0){
      this.id=this.route.snapshot.params['id'];
      this.getEmployee();
    }
  }

getEmployee()
{
  this.es.getEmployeeById(this.id).subscribe((data)=>{
    this.emp=data;
  },
  error=>{
    console.log(error);
  });
}

  onSubmit() {
    if(this.id>0){
      this.update();  
    }else{
      // this.save();
      this.check();
    }
  }

  check(){
    this.es.check(this.emp)
      .subscribe(res => {
        if(!res.available){
          this.save();
        }else{
          alert('Employee contact number Already in Use, Try Another Contact number');
        }
      })
  }

  update(){
    this.es.updateEmployee(this.id, this.emp).subscribe((data)=>
      {
        console.log(data);
        alert("employee updated successfully");
        this.gotoNext();
      },
      error => {
        console.log(error);
        alert('cannot save your data');
      });
  }

  save(){
    this.es.addEmployee(this.emp).subscribe((data)=>
    {
      console.log(data);
      alert("Employee added successfully");
      this.gotoNext();
    },
    error => {
      console.log(error);
      alert('can not save your data');
    });
  
  }
  gotoNext()
  {
    this.router.navigate(['employeeList']);
  }

}
