import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
  @ViewChild('doughnutCanvas', { static: true }) dCanvas : any;
  doughnutChart: any;
  public dounutChartOption:any;
  constructor() {
  }
  ngOnInit() {
    this.doughnutChartMethod();
  }

  doughnutChartMethod() {
    this.doughnutChart = new Chart(this.dCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['poll Created', 'approval pending', 'answered poll'],
        datasets: [{
          label: 'Poll',
          data: [50, 29, 15],
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)'
          ],
          hoverBackgroundColor: [
            '#FFCE56',
            '#FF6384',
            '#36A2EB'
          ]
        }]
      }
    });
  }
}


 
