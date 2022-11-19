import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public platform:Platform, public navCtrl:NavController, public router:Router) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      await SplashScreen.hide();
    });
  }
}
