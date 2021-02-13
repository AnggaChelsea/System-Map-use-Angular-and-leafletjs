import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators'
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }
  private getDataMap(response: any){
    return response.data;
  }

  getMap(): Observable<any>{
    return this.http.get(`${environment.urlAdress}api/v1/employee`)
  }
}
