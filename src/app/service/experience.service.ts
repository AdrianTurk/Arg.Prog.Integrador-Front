import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experience } from '../model/experience';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  EXPERIENCE_DATA_URL = environment.backendURL + '/experience';
  //Not suported in firebase free
  //EXPERIENCE_DATA_URL = `${process.env['BACKEND_URL']}/experience`;

  constructor(private httpClient: HttpClient) {}
  public list(): Observable<Experience[]> {
    return this.httpClient.get<Experience[]>(
      this.EXPERIENCE_DATA_URL + '/list'
    );
  }

  public detail(id: number): Observable<Experience> {
    return this.httpClient.get<Experience>(
      this.EXPERIENCE_DATA_URL + `/detail/${id}`
    );
  }

  public save(data: Experience): Observable<any> {
    return this.httpClient.post<any>(
      this.EXPERIENCE_DATA_URL + '/create',
      data
    );
  }

  public update(id: number, data: Experience): Observable<any> {
    return this.httpClient.put<any>(
      this.EXPERIENCE_DATA_URL + `/update/${id}`,
      data
    );
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(
      this.EXPERIENCE_DATA_URL + `/delete/${id}`
    );
  }
}
