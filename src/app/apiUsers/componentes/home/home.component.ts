import { Component, OnInit } from '@angular/core';
import { Users } from '../../interfaces/users';
import { UsersService } from '../../servicios/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  
  users!:Users;

  constructor(private userService:UsersService){}


  ngOnInit(): void {
      this.mostrarTodosLosUsuarios();
  }

  mostrarTodosLosUsuarios():void {
      this.userService.obtenerTodosLosUsuarios().subscribe(
        (data:Users) => this.users = data,
        (error) => console.error("Error al mostrar los usuarios",error)
      );
  }

  borrarUsuario(UserId:number):void {
    this.userService.borrarUsuario(UserId).subscribe(
      () => {
          console.log('Usuario Borrado correctamente');
      },
      (error) => console.error('Se ha producido un error al intentar borrar el usuario',error)
    )
  }

}
