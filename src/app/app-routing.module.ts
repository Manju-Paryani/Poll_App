import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'welcome-screen',
    pathMatch: 'full'
  },
  {
    path: 'credential-page',
    loadChildren: () => import('./credential-page/credential-page.module').then( m => m.CredentialPagePageModule)
  },
  {
    path: 'my-dashboard',
    loadChildren: () => import('./my-dashboard/my-dashboard.module').then( m => m.MyDashboardPageModule)
  },
  {
    path: 'welcome-screen',
    loadChildren: () => import('./welcome-screen/welcome-screen.module').then( m => m.WelcomeScreenPageModule)
  },
  {
    path: 'create-survey',
    loadChildren: () => import('./create-survey/create-survey.module').then( m => m.CreateSurveyPageModule)
  },
  {
    path: 'answer-survey',
    loadChildren: () => import('./answer-survey/answer-survey.module').then( m => m.AnswerSurveyPageModule)
  },  {
    path: 'poll-list',
    loadChildren: () => import('./poll-list/poll-list.module').then( m => m.PollListPageModule)
  },
  {
    path: 'pending-polls',
    loadChildren: () => import('./pending-polls/pending-polls.module').then( m => m.PendingPollsPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
