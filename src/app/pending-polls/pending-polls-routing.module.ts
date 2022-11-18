import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendingPollsPage } from './pending-polls.page';

const routes: Routes = [
  {
    path: '',
    component: PendingPollsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendingPollsPageRoutingModule {}
