import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-pedido-detalle',
  templateUrl: './pedido-detalle.component.html',
  styleUrls: ['./pedido-detalle.component.css']
})
export class PedidoDetalleComponent implements OnInit {

  detalle:any;
  idPedido:number;
  constructor(
    private activatedRoute: ActivatedRoute,
    public apiService: ApiService) 
    { 

      this.detalle = [];
      this.idPedido= this.activatedRoute.snapshot.params.id;
    }


  ngOnInit(): void {
    this.getAllArticulos();
  }

  getAllArticulos() {
    this.apiService.getArticulos(this.idPedido).subscribe(response => {
      this.detalle = response;
    })
  }
    
}

