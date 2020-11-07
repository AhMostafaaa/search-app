import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(public _http: HttpClient) { }
  public getJsonFile():Observable<any> {
    return this._http.get('../../assets/Employees.json');
  }
}
