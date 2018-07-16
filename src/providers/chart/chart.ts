import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ChartProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChartProvider {
  chartMaxValues;
  chartMinValues;
  chartLabelValues;

  constructor(public http: HttpClient, ) {
    console.log('Hello ChartProvider Provider');
    this.chartLabelValues = [0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13   
    ]
  }

  chartMax(measurementsName) {
    switch (measurementsName) {
      case 'weight':
        this.chartMaxValues = [4.8,
          5.1,
          5.4,
          5.7,
          6.1,
          6.5,
          6.8,
          7.1,
          7.3,
          7.6,
          7.8,
          8.1,
          8.3,
          8.5
          ];
        break;
      case 'height':
        [1,2,3,4,5];
        this.chartMaxValues = [1,2,3,4,5];
      default:
        this.chartMaxValues = [1,2,3,4,5];
    }
    return this.chartMaxValues;
  }
  chartMin(measurementsName) {
    switch (measurementsName) {
      case 'weight':
        this.chartMinValues = [2,
          2.1,
          2.3,
          2.5,
          2.7,
          2.9,
          3,
          3.2,
          3.3,
          3.5,
          3.6,
          3.8,
          3.9,
          4
          ];
        break;
      case 'height':
        [1,2,3,4,5];
        this.chartMinValues = [1,2,3,4,5];
      default:
        this.chartMinValues = [1,2,3,4,5];
    }
    return this.chartMinValues;
  }
  
  

}
