import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido-list',
  templateUrl: './pedido-list.component.html',
  styleUrls: ['./pedido-list.component.css']
})
export class PedidoListComponent implements OnInit {

  pedidosData : any;


  constructor(
    private router:Router,
    public apiService: ApiService
  ){
      this.pedidosData = [];

    }
    
  ngOnInit(){

    this.getAllPedidos();
  }

  getAllPedidos() {
    //Get saved list of students
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.pedidosData = response;
    })
  }


  verDetalle( idx:number=1 ){
    this.router.navigate( ['/detalle',idx] );
  }

}
