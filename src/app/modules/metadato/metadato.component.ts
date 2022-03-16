import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Metadato } from 'src/app/modelos/metadatos';
import { MetadatoService } from 'src/app/servicios/api/metadato.service';

@Component({
  selector: 'app-metadato',
  templateUrl: './metadato.component.html',
  styleUrls: ['./metadato.component.css']
})
export class MetadatoComponent implements OnInit {

  metadatos:Metadato[]=[];

  constructor(private toastr: ToastrService,private api:MetadatoService) { }

  ngOnInit(): void {
    this.ListaMetadato();
  }

  ListaMetadato(){
    this.api.ListaMetadato().subscribe(data=>{
      console.log(data.result);
       this.metadatos=data.result;
    },err => {
      console.log(err.message);
    });
  }
  
  Editar(idMetadato:string){
    alert('Editando '+idMetadato);
  }
  Eliminar(idMetadato:string){
    alert('Eliminando '+idMetadato);
  }

}
