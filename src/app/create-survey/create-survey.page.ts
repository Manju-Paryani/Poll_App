import { CommonServiceService } from './../common-service.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.page.html',
  styleUrls: ['./create-survey.page.scss'],
})
export class CreateSurveyPage implements OnInit {
  question: string = '';
  option1:any; 
  option2: any;
  option3: any;
  option4: any;
  poll_data:any

  constructor(public navCtrl: NavController,
    private alertController: AlertController,
    public commonService: CommonServiceService) { }

  ngOnInit() {
  }

  options(){
    this.poll_data = {
    topic : this.question,
    vote_options_attributes :[
      {title: this.option1},
      {title: this.option2},
      {title: this.option3},
      {title: this.option4},
    ]
  }
} 

  dashboard(){
    this.navCtrl.navigateForward('/my-dashboard') // change later
  }

  // survey(){
    
    

  //   this.navCtrl.navigateForward('/create-survey') 
  // }

  publishPoll(){
    this.options()
    this.commonService.createPoll(this.poll_data).subscribe((response: any) => {
      console.log(response)
      if(response.status.code == 200){
        this.survey()
        console.log("post submitted")
      }
  });
}
  async survey(){

    const alert = await this.alertController.create({
      header: 'Successfully',
      message : `You have submitted the Poll.`,
      buttons: [
        {
          text : `Go to Dashboard`,
          cssClass: 'secondary',
          handler: () => {
            this.navCtrl.navigateForward('/my-dashboard')
            alert.dismiss();
          }
        }, 
        {
          text : `New Poll`,
          cssClass: 'primary',
          handler: () => {
            this.option1 = this.option2 = this.option3 = this.option4 = this.question = ''
            // this.navCtrl.navigateForward('/create-survey')

            alert.dismiss();
          }
        }
      ],
      cssClass: 'cherryAlert cherryBackConfirmation',
      mode: 'ios'
    });
    await alert.present();
    alert.onDidDismiss().then(() => {
    })
 }

 back(){
  this.navCtrl.pop()
 }
}

