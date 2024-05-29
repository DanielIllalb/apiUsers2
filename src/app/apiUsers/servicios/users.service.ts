import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users,Datum } from '../interfaces/users';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  private url:string = 'https://reqres.in/api'

  obtenerTodosLosUsuarios():Observable<Users>{
    return this.http.get<Users>(this.url + "/users");
  }

  obtenerUsuarioPorId(Userid:number):Observable<Datum>{
    return this.http.get<Datum>(this.url + "/users/" + Userid );
  }

  crearNuevoUsuario(newUser:Datum):Observable<Datum>{
    return this.http.post<Datum>(this.url + "/users/",newUser);
  }

  borrarUsuario(Userid:number):Observable<void>{
    return this.http.delete<void>(this.url + "/users/" + Userid);
  }
}
