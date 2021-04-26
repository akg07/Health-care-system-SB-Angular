import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../department/Department';
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

  id;
  constructor(private router: Router, private es: EmployeeService, private route: ActivatedRoute, private tss: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tss.getToken();
    if (this.isLoggedIn) {
      const user = this.tss.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.getform();
    }
    else{
      this.router.navigate(['login']);
    }
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
      this.save();
        }
  }
  update()
  {
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
