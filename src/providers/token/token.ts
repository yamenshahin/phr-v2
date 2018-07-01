import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';

/*
  Generated class for the TokenProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TokenProvider {
  private iss = {
    api_login_url : environment.site_url + environment.login_url,
    api_signup_url : environment.site_url + environment.signup_url
  }
  api_login_url= environment.site_url + environment.login_url;
  constructor(public http: HttpClient) {
    console.log('Hello TokenProvider Provider');
  }

  handle(token) {
    this.set(token);
    console.log(this.isValid());
  }

  set(token) {
    localStorage.setItem('token', token);
  }

  get() {
    return localStorage.getItem('token');
  }

  remove() {
    localStorage.removeItem('token');
  }

  isValid() {
    const token = this.get();
    //If there is any token
    if(token) {
      const payload = this.payload(token);

      if(payload) {
        return (<any>Object).values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
    return false;
  }

  payload(token) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload) {
    return JSON.parse(atob(payload));
  }

  loggedIn() {
    return this.isValid();
  }
}
