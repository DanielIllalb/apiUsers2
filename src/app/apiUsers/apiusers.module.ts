import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { UserCardComponent } from './componentes/user-card/user-card.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';
import { CrearUsuarioComponent } from './componentes/crear-usuario/crear-usuario.component';
import { SharedModule } from '../shared/shared.module';
import { ErrorComponent } from './componentes/error/error.component';



@NgModule({
  declarations: [
    HomeComponent,
    UserCardComponent,
    LoginComponent,
    CrearUsuarioComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    UserCardComponent,
    ErrorComponent,
    CrearUsuarioComponent,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ApiusersModule { }
