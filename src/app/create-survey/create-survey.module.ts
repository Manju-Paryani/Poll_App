import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateSurveyPageRoutingModule } from './create-survey-routing.module';

import { CreateSurveyPage } from './create-survey.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateSurveyPageRoutingModule
  ],
  declarations: [CreateSurveyPage]
})
export class CreateSurveyPageModule {}
