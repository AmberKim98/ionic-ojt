import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NextstepPage } from '../nextstep/nextstep.page';
import { RegisterPage } from './register.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterPage
  },
  {
    path: '/nextstep',
    component: NextstepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterPageRoutingModule {}
