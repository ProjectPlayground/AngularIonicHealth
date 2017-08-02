import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/catch';

@Injectable()
export class PlansProvider {
  headers: HttpHeaders;  
  options: any;

  baseUrl = 'https://angular-ionic-health.firebaseio.com';

  constructor(public http: HttpClient) {   
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });
    this.options = ({ headers: this.headers });
  }
  
  getAllPlans(): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/plans/testplan1` + ".json", this.options)
      .catch(this.handleError);
  }  

  private handleError (error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
