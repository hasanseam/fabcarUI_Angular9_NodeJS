import { Injectable } from '@angular/core';
import { Car } from './car';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvokeCarService {
  _url = 'http://'+location.hostname+':8080/api/invoke/';
  constructor(private _http: HttpClient) { }

  invoke(car: Car){
      return this._http.post<any>(this._url,car)
  }
}
