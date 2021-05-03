import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { BillService } from 'src/app/service/bill/bill.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { Bill } from '../Bill';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {

  desc:string;
  billList: Bill[];
  search;
  constructor(private bs: BillService, private router: Router, private ts: TokenStorageService,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(document.body, 'background-color', '#C1F8FF');
    if(this.ts.getToken()){
      this.getList();
    }
    else{
      this.router.navigate(['login']);
    }
  }

  getList(){
    this.bs.getAllBill()
      .subscribe((list) => {
        this.billList = list;
      },
      error => console.log(error));
  }

  gotoBill(){ 
    this.router.navigate(['bill']);
  }

  getBill(id: number) {
    this.router.navigate(['billUpdate', id]);
  }

  deleteBill(id: number) {
    this.bs.deleteBill(id)
      .subscribe((response) => {
        alert('deleted ::::: ' + id);
        console.log(response);
        this.getList();
      },
      error => console.log(error));
  }

  invoice(id:number) {
    this.router.navigate(['invoice', id]);
  }

}
