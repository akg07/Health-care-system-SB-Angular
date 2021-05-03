import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/Employee/employee.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { Employee } from '../Employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  desc:string='';
  search;
  employeeList: Employee[];
  isLoggedIn = false;
  showAdminBoard = false;
  private roles: string[];
  
  constructor(private router: Router, private es: EmployeeService, private tss: TokenStorageService,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(document.body, 'background-color', '#C1F8FF');
    this.isLoggedIn = !!this.tss.getToken();
    if (this.isLoggedIn) {
      const user = this.tss.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.getList();
    }
    else{
      this.router.navigate(['login']);
    }
  }

  getList() {
    this.es.getAllEmployee().subscribe((list) => {
      this.employeeList = list;
    },
      error => {
        console.log(error);
      });

  }
  gotoEmployee(){
    this.router.navigate(['employee']);
  }

  getEmployee(id:number)
  {
    this.router.navigate(['employeeUpdate', id]);
  }

  deleteEmployee(id:number)
  {
    this.es.deleteEmployee(id).subscribe((response) => {
      console.log(response);
      alert('Employee deleted');
      this.getList();
    },
      error => {
        console.log(error);
      });
  }


}
