import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.page.html',
  styleUrls: ['./create-survey.page.scss'],
})
export class CreateSurveyPage implements OnInit {
  category: string = '';
  question: string = '';
  option1:any; 
  option2: any;
  option3: any;
  option4: any;
  constructor(public navCtrl: NavController,
    private alertController: AlertController) { }

  ngOnInit() {
  }
  poll_data:any
  options(){
    this.poll_data = {
    topic : '',
    options :{
      option_1: this.option1,
      option_2: this.option2,
      option_3: this.option3,
      option_4: this.option4,
    }
  }
} 

  dashboard(){
    this.navCtrl.navigateForward('/my-dashboard') // change later
  }

  // survey(){
    
    

  //   this.navCtrl.navigateForward('/create-survey') 
  // }

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
            this.option1 = this.option2 = this.option3 = this.option4 = this.question = this.category = ''
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
}
