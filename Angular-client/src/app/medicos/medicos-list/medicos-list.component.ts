import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { MedicosService } from 'src/app/service/medicos/medicos.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { Medicos } from '../Medicos';

@Component({
  selector: 'app-medicos-list',
  templateUrl: './medicos-list.component.html',
  styleUrls: ['./medicos-list.component.css']
})
export class MedicosListComponent implements OnInit {

  desc:string='';
  search;
  medList:Medicos[];

  constructor(private router: Router, private ms: MedicosService, private tss: TokenStorageService, private renderer: Renderer2) { }

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
    this.ms.getAllMedicos()
      .subscribe((list) => {
        this.medList = list;
      },
      error => console.log(error));
  }
  gotoMedicos(){
    this.router.navigate(['medicos']);
  }

  getMedicos(id: number){
    this.router.navigate(['medicosUpdate', id]);
  }

  deleteMedicos(id: number){
    this.ms.deleteMedicos(id)
      .subscribe((response) => {
        console.log(response);
        alert('removed Medicos');
      },
      error => console.log(error))
  }

}
