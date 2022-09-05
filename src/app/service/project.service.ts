import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  PROJECT_DATA_URL = environment.backendURL + '/project';
  //Not suported in firebase free
  //EDUCATION_DATA_URL = `${process.env['BACKEND_URL']}/project`;

  constructor(private httpClient: HttpClient) {}
  public list(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(`${this.PROJECT_DATA_URL}/list`);
  }

  public detail(id: number): Observable<Project> {
    return this.httpClient.get<Project>(
      `${this.PROJECT_DATA_URL}/detail/${id}`
    );
  }

  public save(data: Project): Observable<any> {
    return this.httpClient.post<any>(`${this.PROJECT_DATA_URL}/create`, data);
  }

  public update(id: number, data: Project): Observable<any> {
    return this.httpClient.put<any>(
      `${this.PROJECT_DATA_URL}/update/${id}`,
      data
    );
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.PROJECT_DATA_URL}/delete/${id}`);
  }
}
