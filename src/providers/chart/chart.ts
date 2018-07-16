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
        this.chartMaxValues = [54.7,
          56,
          57.2,
          58.2,
          59.2,
          60.1,
          61,
          61.9,
          62.6,
          63.4,
          64.1,
          64.8,
          65.5,
          66.1
          ];
        break;
      default:
        this.chartMaxValues = [54.7,
          56,
          57.2,
          58.2,
          59.2,
          60.1,
          61,
          61.9,
          62.6,
          63.4,
          64.1,
          64.8,
          65.5,
          66.1
          ];
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
        this.chartMinValues = [43.6,
          44.7,
          45.8,
          46.7,
          47.5,
          48.3,
          49.1,
          49.8,
          50.5,
          51.2,
          51.8,
          52.4,
          52.9,
          53.5
          ];
        break;
      default:
        this.chartMinValues = [43.6,
          44.7,
          45.8,
          46.7,
          47.5,
          48.3,
          49.1,
          49.8,
          50.5,
          51.2,
          51.8,
          52.4,
          52.9,
          53.5
          ];
    }
    return this.chartMinValues;
  }
  
  

}
