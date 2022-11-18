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
  userData: any
  name: any = ''
  createdCount:any
  approvedCount:any
  totalPollCount:any
  answeredPollCount:any
  constructor(public commonService: CommonServiceService,
    public navCtrl: NavController) {
    this.userData = this.commonService.userData
    this.name = this.userData?.name

  }

  ngOnInit() {
    this.dashboard()
  }

  dashboard() {
    this.commonService.pollList().subscribe(res => {
      console.log('poll', res)
      try {
        this.commonService.verifiedPolls = this.verifiedPolls = res.data.verified
        this.commonService.unVerifiedPolls = this.unVerifiedPolls = res.data.unVerifiedPolls
        this.commonService.answeredPollCount =this.answeredPollCount = res.data.answered_count
        this.commonService.approvedCount =this.approvedCount = res.data.approved_count
        this.commonService.createdCount = this.createdCount = res.data.created_count
        this.commonService.totalPollCount = this.totalPollCount = this.verifiedPolls.length

      } catch (err) {
        console.log(err)
      }

      console.log(this.verifiedPolls)


    })
  }

  createSurvey() {
    this.navCtrl.navigateForward('/create-survey')
  }
  joinSurvey() {
    this.navCtrl.navigateForward('/poll-list')

  }

  JoinASurvey() {
    this.navCtrl.navigateForward('/answer-survey')
  }

}
