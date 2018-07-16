import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { TokenProvider } from '../../providers/token/token';
import { Chart } from 'chart.js';
import { ChartProvider } from '../../providers/chart/chart';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  token;
  measurements;
  chart;
  chartButtons;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, private authProvider: AuthProvider, private tokenProvider: TokenProvider, private chartProvider: ChartProvider) {
    this.chartDisplay('weight');
    this.chartButtons = 'Weight';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }
  
  goTo(pageName){
    this.navCtrl.push(pageName);
  }

  chartDisplay(measurementsName) {
    this.token = this.tokenProvider.get();
    this.authProvider.getMeasurementsWithName(this.token, measurementsName).subscribe( data=>{
      this.measurements= data;
      let chartValue = this.measurements.map(measurements => measurements.value);
      let chartDate = this.measurements.map(measurements => measurements.date_taken);
      let chartMaxValues = this.chartProvider.chartMax(measurementsName);
      let chartMinValues = this.chartProvider.chartMin(measurementsName);
      let chartLabelValues = this.chartProvider.chartLabelValues;
      console.log(chartMinValues, chartMaxValues);
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: chartLabelValues,
          datasets: [
            {
              data: chartValue,
              borderColor: 'green',
              fill: false
            },
            {
              data: chartMaxValues,
              borderColor: 'red',
              fill: false
            }
            ,
            {
              data: chartMinValues,
              borderColor: 'blue',
              fill: false
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [
              {
                display: true
              }
            ],
            yAxes: [
              {
                display: true
              }
            ]
          }
        }
      })
    });

  }
}
