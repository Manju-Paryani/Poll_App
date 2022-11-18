import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateSurveyPage } from './create-survey.page';

const routes: Routes = [
  {
    path: '',
    component: CreateSurveyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateSurveyPageRoutingModule {}
