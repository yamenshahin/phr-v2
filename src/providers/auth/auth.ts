import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { HttpHeaders } from '@angular/common/http';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
	api_url = environment.site_url + environment.login_url;

  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

  postLogin(username, password) {

  	let data = {
  		username: username,
  		password: password
  	}

  	let headers = new HttpHeaders();
  	let options = {
  		headers: headers
  	}
  	headers.set('Content-Type', 'application/json');
  	return this.http.post(this.api_url, data, {
  		headers: headers
  	} );
  }
}
