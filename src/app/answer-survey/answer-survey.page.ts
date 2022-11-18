import { CommonServiceService } from './../common-service.service';
import { NavController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer-survey',
  templateUrl: './answer-survey.page.html',
  styleUrls: ['./answer-survey.page.scss'],
})
export class AnswerSurveyPage implements OnInit {

  question: any ;
  option1:any ; 
  option2: any ;
  option3: any ;
  option4: any ;
  data: any;
  
  selectedPoll:any
  selectedId: any;
  // submitPoll_url="https://api.cherryko.tk/api/v1/polls/3/vote"
  
back() {
this.navCtrl.pop()
}

  constructor(public navCtrl : NavController,
    public alert: AlertController,
    public commonService: CommonServiceService) { }

  ngOnInit() {
    this.selectedPoll = this.commonService.selectedPoll
    console.log(this.selectedPoll)

  }

  selected_option(item: any ){

    this.selectedId = item.id
  }

  submit(){
    let data = {
      "vote_option_id": this.selectedId
    }
    let id = {
      "poll_id": this.selectedPoll.poll.id,
    }
    this.commonService.submitPoll(data, this.selectedPoll.poll.id).subscribe((response: any) => {
      console.log("res",response)
  
    this.presentAlert('You have successfully submitted the poll');
    },err =>{
      if(err.status == 422){
        this.presentAlert('You have Already participated in the poll');
      }
    });
  }

  async presentAlert(message: string) {
    const alert = await this.alert.create({
      // header: header,
      message: message,
      buttons: ['OK'],
      cssClass: 'ieco-alert',
      mode: 'ios',
    });
  
    await alert.present();
    alert.onDidDismiss().then(() => {
      this.navCtrl.navigateForward("/my-dashboard")
    })
  }

} 


// function id(data: { vote_option_id: number; }, id: any) {
//   throw new Error('Function not implemented.');
// }

