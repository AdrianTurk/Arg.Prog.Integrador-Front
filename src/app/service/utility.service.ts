import { Injectable } from '@angular/core';
import { LoginUser } from '../model/login-user';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  private loggedStatus: boolean = false;

  constructor(private tokenService: TokenService) {}

  isLogged(): boolean {
    return (this.tokenService.getToken() != null);
  }

  selectText(event: Event) {
    if (this.isLogged())
      window.getSelection().selectAllChildren(event.target as HTMLInputElement);
  }
}
