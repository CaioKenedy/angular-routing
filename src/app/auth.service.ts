import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  estaAutenticado(): boolean {}

  login(email: string, senha: string) {}

  logout() {}
}
