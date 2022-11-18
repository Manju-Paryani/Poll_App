import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.page.html',
  styleUrls: ['./poll-list.page.scss'],
})
export class PollListPage implements OnInit {
  verifiedList:any
  constructor(public commonService: CommonServiceService,
    public navCtrl: NavController) {

   }

  ngOnInit() {
    this.verifiedList = this.commonService.verifiedPolls
    console.log("verified list:", this.verifiedList)
  }
  back()
  {
    this.navCtrl.pop()
  }
  viewPoll(item:any){
    // debugger
    this.commonService.selectedPoll = item
    this.navCtrl.navigateForward('/answer-survey')
  }
}
