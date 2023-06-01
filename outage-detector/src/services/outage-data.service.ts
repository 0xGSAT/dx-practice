import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OutageDataService {

  constructor(private http: HttpClient) { }

  private mockOutageListURL:string = "http://localhost:3000/outageList";

  getOutageList(): Observable<any>{
    return this.http.get(this.mockOutageListURL);
  }

}
