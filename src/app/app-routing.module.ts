import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearUsuarioComponent } from './apiUsers/componentes/crear-usuario/crear-usuario.component';
import { ErrorComponent } from './apiUsers/componentes/error/error.component';
import { HomeComponent } from './apiUsers/componentes/home/home.component';
import { LoginComponent } from './apiUsers/componentes/login/login.component';
import { UserCardComponent } from './apiUsers/componentes/user-card/user-card.component';
import { authGuard } from './apiUsers/guardas/auth.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:"users",component:HomeComponent,canActivate:[authGuard]},
  {path:"users/:userId",component:UserCardComponent,canActivate:[authGuard]},
  {path:"newUsers",component:CrearUsuarioComponent,canActivate:[authGuard]},
  {path:"error",component:ErrorComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
