import { Injectable } from '@angular/core';
import { PruebaI } from '../../modelos/prueba.interface';
import { ResponseI } from '../../modelos/response.interface' ;
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string="http://jsonplaceholder.typicode.com/";
  constructor(private http:HttpClient) { }

  getAllPrueba():Observable<PruebaI[]>{
      let direccion=this.url+"posts";
      return this.http.get<PruebaI[]>(direccion);
  }
}
