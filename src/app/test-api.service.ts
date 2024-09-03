import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestApiService {

  apiUrl = environment.apiUrl;


  constructor(private http: HttpClient) { }

  post(apiName: any, data: any): Observable<any> {
    const url = `${this.apiUrl + apiName}`;
    return this.http.post<any>(url, data);
}
get(apiName: any, id: any): Observable<any> {
    const url = `${this.apiUrl + apiName}/${id}`;
    return this.http.get<any>(url);
}



getwithoutid(apiName: any): Observable<any> {
    const url = `${this.apiUrl + apiName}`;
    return this.http.get<any>(url);
}
}
