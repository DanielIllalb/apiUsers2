import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Datum } from '../../interfaces/users';
import { Router } from '@angular/router';
import { UsersService } from '../../servicios/users.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrl: './crear-usuario.component.css'
})
export class CrearUsuarioComponent {
  userForm: FormGroup;

  id:number = 10;

  constructor(private fb: FormBuilder, private userService: UsersService, private router:Router) {
    this.userForm = this.fb.group({
      id: ['',Validators.required],
      email: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['',Validators.required],
      avatar: ['',Validators.required]
    });
  }

  get email() {
    return this.userForm.get('email') as FormControl;
  }

  get first_name() {
    return this.userForm.get('first_name') as FormControl;
  }

  get last_name() {
    return this.userForm.get('last_name') as FormControl;
  }


  crearUsuario(): void {
    if (this.userForm.valid) {
      const nuevoUsuario: Datum = {
        id: this.id,
        email: this.userForm.value.email,
        first_name: this.userForm.value.first_name,
        last_name: this.userForm.value.last_name,
        avatar: this.userForm.value.avatar
      };

      this.userService.crearNuevoUsuario(nuevoUsuario).subscribe(
        (data: Datum) => {
          this.router.navigate(['/users']);
          console.log('Workout creado correctamente', data);
        },
        (error) => console.error('Se ha producido un error al intentar crear el workout', error)
      );
    }
  }
}
