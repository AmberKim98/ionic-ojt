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
  {
    path: 'friendslist',
    loadChildren: () => import('./friendslist/friendslist.module').then( m => m.FriendslistPageModule)
  },
  {
    path: 'barcode-scanner',
    loadChildren: () => import('./barcode-scanner/barcode-scanner.module').then( m => m.BarcodeScannerPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'update/:id',
    loadChildren: () => import('./update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'show/:id',
    loadChildren: () => import('./show/show.module').then( m => m.ShowPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
