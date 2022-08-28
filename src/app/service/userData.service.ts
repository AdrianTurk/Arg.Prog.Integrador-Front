import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UserData } from '../model/UserData.model';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  
  SERVER = 'https://still-spire-19033.herokuapp.com';

  //Not suported in firebase free
  //SERVER = `${process.env['BACKEND_URL']}`;

  constructor(private httpClient: HttpClient) {}

  public getUserData(): Observable<UserData> {
    return this.httpClient.get<UserData>(this.SERVER + '/user/admin');
  }

  public update(userName: string, data: UserData): Observable<any> {
    console.log('updating: ', this.SERVER + `/user/update/${userName}`, data);

    return this.httpClient.put<any>(this.SERVER + `/user/update/${userName}`, data);
  }
}
