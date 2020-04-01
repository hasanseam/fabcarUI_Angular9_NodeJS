import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class QueryService {
  _url = 'http://'+location.hostname+':8080/api/query/';
  constructor(private _http: HttpClient) { }

  query(){
    return this._http.get(this._url)
  }
}
