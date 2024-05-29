import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Datum } from '../../interfaces/users';
import { UsersService } from '../../servicios/users.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent implements OnInit {

  user: Datum | undefined; 


  constructor(private usersService:UsersService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const userId = params['userId'];
      this.obtenerUsuario(userId);
    });
  }

  obtenerUsuario(userId:number):void {
    this.usersService.obtenerUsuarioPorId(userId)
    .subscribe(
      (data:Datum) => {this.user = data,console.log(this.user)},
      error => {console.log(error);}
    );
  }

}
