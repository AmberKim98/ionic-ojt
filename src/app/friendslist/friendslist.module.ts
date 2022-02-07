import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FriendslistPageRoutingModule } from './friendslist-routing.module';
import { FriendslistPage } from './friendslist.page';
import { RegisterPage } from '../register/register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FriendslistPageRoutingModule
  ],
  providers: [ RegisterPage ],
  declarations: [FriendslistPage]
})
export class FriendslistPageModule {}
