import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public platform:Platform, public navCtrl:NavController, public router:Router) {
    this.platform.ready().then(() => {
      this.router.navigateByUrl('/welcome-screen');
    });

  }
}
