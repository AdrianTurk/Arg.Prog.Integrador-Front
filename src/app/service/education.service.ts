import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Education } from '../model/education';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  EDUCATION_DATA_URL = 'https://still-spire-19033.herokuapp.com/education';

  constructor(private httpClient: HttpClient) {}
  public list(): Observable<Education[]> {
    return this.httpClient.get<Education[]>(this.EDUCATION_DATA_URL + '/list');
  }

  public detail(id: number): Observable<Education> {
    return this.httpClient.get<Education>(
      this.EDUCATION_DATA_URL + `/detail/${id}`
    );
  }

  public save(data: Education): Observable<any> {
    return this.httpClient.post<any>(this.EDUCATION_DATA_URL + '/create', data);
  }

  public update(id: number, data: Education): Observable<any> {
    return this.httpClient.put<any>(
      this.EDUCATION_DATA_URL + `/update/${id}`,
      data
    );
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(
      this.EDUCATION_DATA_URL + `/delete/${id}`
    );
  }
}
