import { CommonServiceService } from './../common-service.service';
import { NavController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer-survey',
  templateUrl: './answer-survey.page.html',
  styleUrls: ['./answer-survey.page.scss'],
})
export class AnswerSurveyPage implements OnInit {

  question: any = "Who has made 100 Centuries in cricket?";
  option1:any = "Sachin Tendulkar"; 
  option2: any = "Virat Kohli";
  option3: any = "Kumara Sangakara";
  option4: any = "Don Bradman";
  data: any;
  
  
back() {
// throw new Error('Method not implemented.');
}

  constructor(public navCtrl : NavController,
    public alert: AlertController,
    public commonService: CommonServiceService) { }

  ngOnInit() {
  }

  submit(){
    // debugger
    let data = {
      "vote_option_id": 5
  }
    this.commonService.submitPoll(data).subscribe((response: any) => {
      console.log(response)
    this.presentAlert('You have successfully submitted the poll');
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

