import { Component } from '@angular/core';
import { ActionSheetController, ToastController } from '@ionic/angular';
import * as data from "../const/data";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(public actionSheetController: ActionSheetController, private toastController: ToastController) {}

  public data = data.contacts;
  
  ngOnInit() {
  }

  async showActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Contact',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        id: 'delete-btn',
        data: {
          type: 'delete'
        },
        handler: () => {
          console.log('This contact was deleted');
        }
      }, 
      {
        text: 'Share',
        icon: 'share',
        data: 10,
        handler: () => {
          console.log('This contact was shared.');
        }
      }, 
      {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('This contact was marked as favorite.');
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }]
    });
    await actionSheet.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Added to Favorites!',
      icon: 'checkmark-done-outline',
      position: 'bottom',
      duration: 500
    })
    await toast.present();
  }

  onRenderItems(event)
  {
    event.detail.complete();  
  }
}
