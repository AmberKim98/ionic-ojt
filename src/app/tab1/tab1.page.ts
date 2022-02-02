import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public alertCtrl: AlertController, private menu: MenuController) {}

  public categories = [
    { val: 'Business & Finance' },
    { val: 'Computers & IT Business' },
    { val: 'Health & Medicine' },
    { val: 'General News' }
  ];

  scrollToTop() {
    document.querySelector('ion-content').scrollToTop(1500);
  }

  async showAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Welcome!',
      message: 'Please click "OK" button to register your account!',
      buttons: [
        {
          text: 'Register',
          handler: () => {
            this.promptAlert();
          }
        },
        {
          text: 'Cancel',
          role: 'Cancel'
        }
      ]
    })
    await alert.present();
  }

  async successAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Congratulations!',
      message: 'Your account was successfully registered!'
    })
    await alert.present();
  }

  async promptAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Your Information',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Your Full Name'
        },
        {
          name: 'password',
          type: 'password',
          placeholder: 'Type a new password'
        },
      ],
      buttons: [
        {
          text: 'Next',
          handler: () => {
            this.successAlert();
          }
        }
      ]
    })
    await alert.present();
  }

  doRefresh(event)
  {
    setTimeout(()=>{
      event.target.complete();
    },2000);
  }
}
