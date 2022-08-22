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
  public update(userName: string, data: UserData): Observable<any> {
    console.log('updating: ', this.SERVER + `/user/update/${userName}`, data);
    let obs: Observable<any> = new Observable();
    obs = this.http.put<any>(this.SERVER + `/user/update/${userName}`, data);
    console.log('Observable: ', obs);
    return obs;
  }
}
