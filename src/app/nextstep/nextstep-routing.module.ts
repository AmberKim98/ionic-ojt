import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NextstepPage } from './nextstep.page';

const routes: Routes = [
  {
    path: '',
    component: NextstepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NextstepPageRoutingModule {}
