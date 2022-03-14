import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  myAppUrl=environment.endpoint;
  myApiUrl='/usuario/UserLogin/';
  constructor(private http:HttpClientModule) { }

}
