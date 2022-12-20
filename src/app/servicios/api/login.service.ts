import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../../modelos/user';
import { Usuario } from '../../modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  myAppUrl: string='';
  myApiUrl: string='';
  headers;
  constructor(private http:HttpClient) { 
    this.myAppUrl=environment.UriGeneral;
    this.myApiUrl='usuario/UserLogin/'
    this.headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 
    'Bareer '+ 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InhPcHl0MEo3SFNBcXM1WCIsImdpdmVuX25hbWUiOiJUcmF6YWJpbGlkYWQiLCJuYW1laWQiOiJHZW9UcmF6IiwianRpIjoiNzBhYjgyMWEtY2FiZC00NDJjLTkxZjctNTVkMGE3N2E2MzI2IiwiZXhwIjoxNjQ2ODYxNjY4fQ.XTYCyqe7FQFILeIvuo7sdUTeFCKAyoGUvjK-sRgbX8g'});
  }
  
  login(usuario:User):Observable<any>{
    return this.http.post(this.myAppUrl+this.myApiUrl,JSON.stringify(usuario), {headers:this.headers})
  }

  login2():Observable<any>{
    return this.http.get('http://localhost:5162/api/Repositorio/Listar-Repositorio')
  }
}
