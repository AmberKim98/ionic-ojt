import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-nextstep',
  templateUrl: './nextstep.page.html',
  styleUrls: ['./nextstep.page.scss'],
})
export class NextstepPage implements OnInit {

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async successAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Congratulations!',
      message: 'Your account was successfully registered!'
    })
    await alert.present();
  }
}
