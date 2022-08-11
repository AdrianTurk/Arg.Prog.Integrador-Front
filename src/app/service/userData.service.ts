import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from '../model/UserData.model';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  
  SERVER = 'https://still-spire-19033.herokuapp.com';
  
  //Not suported in firebase free
  //SERVER = `${process.env['BACKEND_URL']}`;

  constructor(private http: HttpClient) {}

  public getUserData(): Observable<UserData> {
    return this.http.get<UserData>(this.SERVER + '/user/admin');
  }
}
