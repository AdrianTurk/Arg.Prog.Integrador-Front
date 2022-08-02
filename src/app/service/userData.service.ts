import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from '../model/UserData.model';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  SERVER = 'https://still-spire-19033.herokuapp.com/';

  constructor(private http: HttpClient) {}

  public getUserData(): Observable<UserData> {
    return this.http.get<UserData>(this.SERVER + '/user/user2');
  }
}
