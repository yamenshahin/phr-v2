import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthProvider } from '../auth/auth';
import { TokenProvider } from '../token/token';

/*
  Generated class for the ChartProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChartProvider {
  measurements;
  token;
  constructor(public http: HttpClient, ) {
    console.log('Hello ChartProvider Provider');
  }

  
}
