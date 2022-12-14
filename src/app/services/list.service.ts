import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Get } from './types/videos';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private readonly apiUrl = 'http://192.168.3.11:8888/api';
  constructor(private readonly http: HttpClient) {}

  public request(): Observable<Get> {
    return this.http.get<Get>(`${this.apiUrl}/videos`);
  }
}
