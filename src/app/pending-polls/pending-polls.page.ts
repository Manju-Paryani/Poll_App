import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-pending-polls',
  templateUrl: './pending-polls.page.html',
  styleUrls: ['./pending-polls.page.scss'],
})
export class PendingPollsPage implements OnInit {
  unVerifiedPolls:any
  pollId:any
  constructor(public commonService: CommonServiceService, public navCtrl:NavController) {
    this.unVerifiedPolls = this.commonService.unVerifiedPolls
   }

  ngOnInit() {
  }
  verifyPoll(item:any){
    this.pollId = item.poll.id
    this.commonService.verifyPoll(this.pollId).subscribe(res =>{
      console.log(res)
      if(res.poll?.is_verified){
        this.dashboard()
      }
    },err =>{
      console.log(err)
    })
  }

  dashboard() {
    this.commonService.pollList().subscribe(res => {
      console.log('poll', res)
      try {
        this.commonService.verifiedPolls =  res.data.verified
        this.commonService.unVerifiedPolls = this.unVerifiedPolls = res.data.unverified
        this.commonService.answeredPollCount = res.data.answered_count
        this.commonService.approvedCount =  res.data.approved_count
        this.commonService.createdCount = res.data.created_count

      } catch (err) {
        console.log(err)
      }


    })
  }
  back(){
    this.navCtrl.pop()
  }
}
