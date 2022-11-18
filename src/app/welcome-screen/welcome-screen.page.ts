import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.page.html',
  styleUrls: ['./welcome-screen.page.scss'],
})
export class WelcomeScreenPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  getStarted(){
    this.navCtrl.navigateForward('/credential-page')
  }
}
