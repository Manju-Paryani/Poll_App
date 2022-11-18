import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.page.html',
  styleUrls: ['./my-dashboard.page.scss'],
})
export class MyDashboardPage implements OnInit {
  verifiedPolls : any = []
  unVerifiedPolls : any = []
  constructor(public commonService: CommonServiceService,
    public navCtrl: NavController) { 

  }

  ngOnInit() {
    this.dashboard()
  }

  dashboard(){
    this.commonService.pollList().subscribe(data =>{
      console.log('poll', data)
      //let temp = data.data
      console.log(this.verifiedPolls)


    })
  }

  createSurvey(){
    this.navCtrl.navigateForward('/create-survey')
  }

}
