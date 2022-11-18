import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CredentialPagePageRoutingModule } from './credential-page-routing.module';

import { CredentialPagePage } from './credential-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CredentialPagePageRoutingModule
  ],
  declarations: [CredentialPagePage]
})
export class CredentialPagePageModule {}
