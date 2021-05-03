import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { OperationService } from 'src/app/service/Opertion/operation.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { Operation } from '../Operation';

@Component({
  selector: 'app-operation-list',
  templateUrl: './operation-list.component.html',
  styleUrls: ['./operation-list.component.css']
})
export class OperationListComponent implements OnInit {

  desc: string ='';
  search;
  opList: Operation[];

  constructor(private router: Router, private os: OperationService, private tss: TokenStorageService, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(document.body, 'background-color', '#C1F8FF');
    if(this.tss.getToken()){
      this.getList();
    }
    else{
      this.router.navigate(['login']);
    }
  }

  getList(){
    this.os.getAllOperation()
      .subscribe((list) => {
        this.opList = list;
      },
      error => console.log(error));
  }
  gotoOperation(){
    this.router.navigate(['operation']);
  }

  getOpertion(id: number){
    this.router.navigate(['operationUpdate', id]);
  }

  deleteOperation(id: number){
    this.os.deleteOperation(id)
      .subscribe((response) => {
        console.log(response);
        alert('removed Operation');
      },
      error => console.log(error))
  }

}
