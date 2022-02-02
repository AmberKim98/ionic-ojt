import { Component, ViewChild } from '@angular/core';
import { ActionSheetController, IonInfiniteScroll, ToastController } from '@ionic/angular';
import * as contacts from "../const/data";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  public data = contacts;
  public contactsList = [];
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(public actionSheetController: ActionSheetController, private toastController: ToastController) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    for(var i=0; i<this.data.contacts.length; i++)
    {
      this.contactsList.push(this.data.contacts[i]);
    }
  }

  doInfinite(event)
  {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      if (this.contactsList.length == 48) {
        event.target.disabled = true;
      }
      console.log('---contacts---', this.data.contacts.length)
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
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
