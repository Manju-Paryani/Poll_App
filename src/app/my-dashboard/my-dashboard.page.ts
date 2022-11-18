import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.page.html',
  styleUrls: ['./my-dashboard.page.scss'],
})
export class MyDashboardPage implements OnInit {

  constructor(public commonService: CommonServiceService) { 

  }

  ngOnInit() {
    this.dashboard()
  }

  dashboard(){
    this.commonService.pollList().subscribe(data =>{
      console.log('poll', data)
    })
  }

}
