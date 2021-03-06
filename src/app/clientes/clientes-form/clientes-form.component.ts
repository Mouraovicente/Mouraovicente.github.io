import { Component, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import {Cliente} from '../cliente'
import {ClientesService} from '../../clientes.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {
 cliente : Cliente;
 success:boolean= false;
 erros: string [];
  constructor(private service: ClientesService,private router: Router) { 
     this.cliente = new Cliente();
  }
  ngOnInit(): void {
  }


  onSubmit(){
    this.service.salvar(this.cliente)
    .subscribe(response =>{
      this.success=true
      this.erros= null
      this.cliente = response;
    }), errorResponse => {
      this.success=false
      this.erros = errorResponse.error.errors
      
    }
  }


  voltarListagem(){
    this.router.navigate(['/clientes-lista'])
  }

}
