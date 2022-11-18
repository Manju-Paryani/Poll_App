import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendingPollsPageRoutingModule } from './pending-polls-routing.module';

import { PendingPollsPage } from './pending-polls.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendingPollsPageRoutingModule
  ],
  declarations: [PendingPollsPage]
})
export class PendingPollsPageModule {}
