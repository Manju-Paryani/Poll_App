import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js'
import { CommonServiceService } from '../common-service.service';

Chart.register(...registerables)

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
  @ViewChild('doughnutCanvas', { static: true }) dCanvas : any;
  doughnutChart: any;
  noData = false
  public dounutChartOption:any;
  constructor(public commonService: CommonServiceService) {
  }
  ngOnInit() {
    this.doughnutChartMethod();
    if(this.commonService.createdCount == 0 && this.commonService.approvedCount == 0 && this.commonService.answeredPollCount == 0){
      this.noData = true
    }else{
      this.noData= false
    }
  }

  doughnutChartMethod() {
    this.doughnutChart = new Chart(this.dCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Created poll ', 'Approved poll', 'Answered poll'],
        datasets: [{
          label: 'Poll',
          data: [this.commonService.createdCount, this.commonService.approvedCount, this.commonService.answeredPollCount],
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


 
