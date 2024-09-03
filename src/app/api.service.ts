import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = environment.apiUrl;


  constructor(private http: HttpClient ) {}

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

  

