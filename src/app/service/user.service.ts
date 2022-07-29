import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User.model';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  SERVER = 'http://localhost:8080/'
  constructor(private http:HttpClient) {}
  public getUser(): Observable<User>{
    return this.http.get<User>(this.SERVER + "user/get/3")
  }
}
