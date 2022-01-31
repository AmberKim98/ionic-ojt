import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NextstepPageRoutingModule } from './nextstep-routing.module';

import { NextstepPage } from './nextstep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NextstepPageRoutingModule
  ],
  declarations: [NextstepPage]
})
export class NextstepPageModule {}
