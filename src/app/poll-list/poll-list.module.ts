import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PollListPageRoutingModule } from './poll-list-routing.module';

import { PollListPage } from './poll-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PollListPageRoutingModule
  ],
  declarations: [PollListPage]
})
export class PollListPageModule {}
