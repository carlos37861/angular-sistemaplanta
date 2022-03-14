import { Injectable } from '@angular/core';
import { PruebaI } from '../../modelos/prueba.interface';
import { ResponseI } from '../../modelos/response.interface' ;
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseModel } from 'src/app/modelos/responsemodel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


    urlApp:string=environment.UriGeneral;
    urlApi:string="api/Repositorio/";
  constructor(private http:HttpClient) { }
  
  getAllPrueba():Observable<ResponseModel>{
     let direccion=this.urlApp+this.urlApi;
      return this.http.get<ResponseModel>(direccion);
  }
}
