import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PollListPage } from './poll-list.page';

const routes: Routes = [
  {
    path: '',
    component: PollListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PollListPageRoutingModule {}
