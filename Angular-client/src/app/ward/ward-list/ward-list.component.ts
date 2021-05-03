import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { WardService } from 'src/app/service/Ward/ward.service';
import { Ward } from '../Ward';

@Component({
  selector: 'app-ward-list',
  templateUrl: './ward-list.component.html',
  styleUrls: ['./ward-list.component.css']
})
export class WardLIstComponent implements OnInit {

  desc:string='';
  search;
  wardList: Ward[];

  constructor(private router: Router, private ws:  WardService, private tss: TokenStorageService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(document.body, 'background-color', '#C1F8FF');
    if(this.tss.getToken()){
      this.getList();
    }
    else{
      this.router.navigate(['login']);
    }
  }

  getList() {
    this.ws.getAllWard().subscribe((list) => {
      this.wardList = list;
    },
      error => {
        console.log(error);
      });
  }

  gotoWard(){
    this.router.navigate(['ward']);
  }

  getWard(id:number){
    this.router.navigate(['wardUpdate', id]);
  }

  deleteWard(id:number){
    this.ws.deleteWard(id).subscribe((response) => {
      console.log(response);
      alert('Ward deleted');
      this.getList();
    },
      error => {
        console.log(error);
      });
  }

}
