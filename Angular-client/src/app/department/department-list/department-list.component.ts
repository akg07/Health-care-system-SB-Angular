import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/service/department/department.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { Department } from '../Department';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  // private roles: string[];
  // isLoggedIn = false;
  // showAdminBoard = false;
  // username: string;

  desc: string = '';
  search;
  departmentList: Department[];
  isLoggedIn = false;
  showAdminBoard = false;
  private roles: string[];


  constructor(private router: Router, private ds: DepartmentService, private tokenStorageService: TokenStorageService,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(document.body, 'background-color', '#C1F8FF');
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.getList();
    }
    else{
      this.router.navigate(['login']);
    }
  }

  getList() {
    this.ds.getAllDepartment().subscribe((list) => {
      this.departmentList = list;
    },
      error => {
        console.log(error);
      });
  }

  gotoDepartment() {
    this.router.navigate(['department']);
  }
  getDepartment(id: number) {
    this.router.navigate(['departmentUpdate', id]);
  }
  deleteDepartment(id: number) {
    this.ds.deleteDepartment(id).subscribe((response) => {
      console.log(response);
      alert('Department deleted');
      this.getList();
    },
      error => {
        console.log(error);
      });
  }

}
