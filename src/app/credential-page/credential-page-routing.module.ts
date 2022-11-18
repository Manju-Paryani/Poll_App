import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CredentialPagePage } from './credential-page.page';

const routes: Routes = [
  {
    path: '',
    component: CredentialPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CredentialPagePageRoutingModule {}
