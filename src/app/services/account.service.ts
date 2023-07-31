import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { envinronment } from '../environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  private apiUrl = envinronment.API_URL;

  constructor(private http: HttpClient) {}

  getAccount(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
