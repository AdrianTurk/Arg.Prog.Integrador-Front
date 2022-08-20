import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  PROJECT_DATA_URL = 'https://still-spire-19033.herokuapp.com/skill';
  //Not suported in firebase free
  //EDUCATION_DATA_URL = `${process.env['BACKEND_URL']}/project`;

  constructor(private httpClient: HttpClient) {}
  public list(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.PROJECT_DATA_URL + '/list');
  }

  public detail(id: number): Observable<Skill> {
    return this.httpClient.get<Skill>(this.PROJECT_DATA_URL + `/detail/${id}`);
  }

  public save(data: Skill): Observable<any> {
    return this.httpClient.post<any>(this.PROJECT_DATA_URL + '/create', data);
  }

  public update(id: number, data: Skill): Observable<any> {
    return this.httpClient.put<any>(
      this.PROJECT_DATA_URL + `/update/${id}`,
      data
    );
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.PROJECT_DATA_URL + `/delete/${id}`);
  }
}
