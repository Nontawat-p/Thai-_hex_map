import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { statusChartOptions } from './helper/statusChartOptions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello';
  statusChart = new Chart(statusChartOptions);

}
