import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'nextstep',
    loadChildren: () => import('./nextstep/nextstep.module').then( m => m.NextstepPageModule)
  },
  {
    path: 'nextstep',
    loadChildren: () => import('./nextstep/nextstep.module').then( m => m.NextstepPageModule)
  },
  {
    path: 'mail',
    loadChildren: () => import('./mail/mail.module').then( m => m.MailPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
