import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment'; 


/*
  Generated class for the MeasurementsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MeasurementProvider {

  api_url = environment.site_url + environment.measurement_url+'/9';

  constructor(public http: HttpClient) {
    console.log('Hello MeasurementsProvider Provider');
  }

  getMeasurement() {

  	return this.http.get( this.api_url );
  }

}