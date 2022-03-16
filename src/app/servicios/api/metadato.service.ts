import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from 'src/app/modelos/responsemodel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MetadatoService {

  urlApp:string=environment.UriGeneral;
  urlApi:string="api/Metadato/";

  
  constructor(private http:HttpClient) { }

  ListaMetadato():Observable<ResponseModel>{
    let direccion=this.urlApp+this.urlApi;
     return this.http.get<ResponseModel>(direccion);
 }
}
