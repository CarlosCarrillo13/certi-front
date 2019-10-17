import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SolverService {

  _url = environment.postUrl;
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private _http: HttpClient) { }

  register(data) {
    console.log(data);
    return this._http.post<any>(this._url, data, { headers: this.httpHeaders });
  }
}
