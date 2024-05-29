import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated: boolean = false;

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  // Método para realizar el inicio de sesión
  login(username: string, password: string): boolean {
    if (username === 'apruebo_angular@mail.com' && password === 'RooT') {
      this.isAuthenticated = true;
      return true;
    } else {
      return false;
    }
  }

  // Método para realizar el cierre de sesión
  logout(): void {
    this.isAuthenticated = false;
  }
}
