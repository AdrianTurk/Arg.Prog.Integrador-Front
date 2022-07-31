import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDTO } from '../model/jwt-dto';
import { LoginUser } from '../model/login-user';
import { NewUser } from '../model/new-user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  AUTH_URL = 'http://localhost:8080/auth';
  constructor(private httpClient: HttpClient) {}

  public newUser(newUser: NewUser): Observable<any> {
    return this.httpClient.post<any>(this.AUTH_URL + '/new', newUser);
  }

  public login(loginUser: LoginUser): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.AUTH_URL + '/login', loginUser);
  }
}
