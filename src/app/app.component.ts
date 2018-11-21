import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';
import { Data } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data: Data[];
  url = 'http://localhost:4230/results';
  month = [];
  price = [];
  chart:any=[];
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    // this.httpClient.get(this.url).subscribe((res: Data[]) => {
    //   res.forEach(y => {
    //     this.month.push(y.month);
    //     this.price.push(y.price);
    //   });
    //  this.chart = new Chart('canvas', {
    //     type: 'pie',
    //     data: {
    //    //   labels: this.month,
    //       labels: [
    //         'Red',
    //         'Yellow',
    //         'Blue'
    //     ],
    //       // datasets: [
    //       //   {
    //       //     data: this.price,
    //       //     borderColor: '#3cba9f',
    //       //     fill: false
    //       //   }
    //       // ],
    //       datasets: [{
    //         data: [10, 20, 30],
    //         backgroundColor:['#ff6384','#36a2eb','#cc65fe']
    //     }]
    //     },
    //     options: {
    //       legend: {
    //         display: true
    //       },
    //       scales: {
    //         xAxes: [{
    //           display: true
    //         }],
    //         yAxes: [{
    //           display: true
    //         }],
    //       }
    //     }
    //   });
    // });
  }
}
