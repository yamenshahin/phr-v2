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
	//Back-end API URLs
	api_login_url= environment.site_url + environment.login_url;
	api_signup_url= environment.site_url + environment.signup_url;
	api_register_url = environment.site_url + environment.register_url;
	api_getMeasurements_url = environment.site_url + environment.getMeasurements_url;
	api_addMeasurements_url = environment.site_url + environment.addMeasurements_url;

  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

	/**
	 * Login
	 * @param password 
	 * @param email 
	 */
  postLogin(email, password) {

  	let data = {
  		password: password,
      email: email
  	}

  	let headers = new HttpHeaders();

  	headers.set('Content-Type', 'application/json');
  	return this.http.post(this.api_login_url, data, {
  		headers: headers
  	} );
	}
	
	/**
	 * Sign Up
	 * @param password 
	 * @param email 
	 * @param name 
	 * @param password_confirmation
	 */
	postSignup(email, password, password_confirmation, name) {

  	let data = {
  		password: password,
			email: email,
			name: name,
			password_confirmation: password_confirmation
  	}

  	let headers = new HttpHeaders();

  	headers.set('Content-Type', 'application/json');
  	return this.http.post(this.api_signup_url, data, {
  		headers: headers
  	} );
	}
	
	/**
	 * Add child
	 * @param name 
	 * @param gender 
	 * @param birthdate 
	 * @param token 
	 */
	postAddChild(name, gender, birthdate, token) {
		let data = {
			name : name,
			gender : gender,
			birthdate :birthdate
		}
		
		let authorization = 'Bearer ' + token
		let headers = new HttpHeaders({
			'Content-Type':  'application/json',
			'Authorization': authorization
		})

		return this.http.post(this.api_register_url, data, {
			headers: headers
		})
	}
	getMeasurements(token) {
		let authorization = 'Bearer ' + token

		return this.http.get(this.api_getMeasurements_url+'/?token='+token)
	}
	getMeasurementsWithName(token, measurementsName) {
		let authorization = 'Bearer ' + token

		return this.http.get(this.api_getMeasurements_url+'/'+measurementsName+'?token='+token)
	}

	postAddMeasurement(measurement_name, date_taken, note, key, value, unit_id, token) {
		let data = {
			measurement_name : measurement_name,
			date_taken : date_taken,
			note :note,
			key : key,
			value : value, 
			unit_id : unit_id
		}
		let authorization = 'Bearer ' + token
		let headers = new HttpHeaders({
			'Content-Type':  'application/json',
			'Authorization': authorization
		})

		return this.http.post(this.api_addMeasurements_url, data, {
			headers: headers
		})
	}
}
