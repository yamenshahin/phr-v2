import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { TokenProvider } from '../token/token';

/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {
  private loggedIn = new BehaviorSubject <boolean>(this.tokenProvider.loggedIn());
  authenticationStatus = this.loggedIn.asObservable();

  constructor(public http: HttpClient, private tokenProvider: TokenProvider) {
    console.log('Hello AuthenticationProvider Provider');
  }

  changeAuthenticationStatus(value: boolean) {
    this.loggedIn.next(value);
  }
}
