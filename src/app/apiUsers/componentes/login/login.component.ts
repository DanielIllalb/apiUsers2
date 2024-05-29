import { Component } from '@angular/core';
import { FormBuilder,Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario:string = "apruebo_angular@mail.com";
  contrasenia:string = "RooT";
  error:string = "";

  constructor(private fb:FormBuilder, private router:Router, private authService:AuthService){}

  formUser = this.fb.group(
    {
      'name': ['',Validators.required],
      'password' : ['',Validators.required]
    }    
  )

  get name() {
    return this.formUser.get('name') as FormControl;
  }

  get password() {
    return this.formUser.get('password') as FormControl;
  }

  login(){
    if(this.authService.login(this.name.value,this.password.value)) {
      console.log('Usuario autenticado');
      console.log(this.authService.isLoggedIn())
      this.router.navigate(['/users']);
    }else {
      this.error = 'Usuario o contraseña incorrectos';
      this.formUser.reset();
    }
}
}
