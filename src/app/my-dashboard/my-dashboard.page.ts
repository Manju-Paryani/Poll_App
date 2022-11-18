import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.page.html',
  styleUrls: ['./my-dashboard.page.scss'],
})
export class MyDashboardPage implements OnInit {
  verifiedPolls: any = []
  unVerifiedPolls: any = []
  constructor(public commonService: CommonServiceService,
    public navCtrl: NavController) {

  }

  ngOnInit() {
    this.dashboard()
  }

  dashboard() {
    this.commonService.pollList().subscribe(res => {
      console.log('poll', res)
      try {
        this.commonService.verifiedPolls = this.verifiedPolls = res.data.verified
        this.commonService.unVerifiedPolls = this.unVerifiedPolls = res.data.unverified
      } catch (err) {
        console.log(err)
      }

      console.log(this.verifiedPolls)


    })
  }

  createSurvey() {
    this.navCtrl.navigateForward('/create-survey')
  }
  joinSurvey(){
    this.navCtrl.navigateForward('/poll-list')

  }

  JoinASurvey(){
    this.navCtrl.navigateForward('/answer-survey')
  }

}
