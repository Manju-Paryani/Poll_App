import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

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
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  options(){
    let options = {
      question_1: this.option1,
      question_2: this.option2,
      question_3: this.option3,
      question_4: this.option4,
    }
  }

  dashboard(){
    this.navCtrl.navigateForward('/credential-page') // change later
  }

  survey(){
    this.navCtrl.navigateForward('/create-survey') 
  }

}
