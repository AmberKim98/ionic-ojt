import { Component } from '@angular/core';
import { ActionSheetController, IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public actionSheetController: ActionSheetController) {
    for(let i=0; i<this.contacts.length; i++)
    {
      this.data.push(this.contacts[i]);
    }
  }

  data = [];

  public contacts = [
    {
        name: 'Mom',
        created: '2022-01-31'
    },
    {
        name: 'Dad',
        created: '2022-01-31'
    },
    {
        name: 'Grandma',
        created: '2022-01-31'
    },
    {
        name: 'Ginny',
        created: '2022-01-31'
    },
    {
        name: 'Georgia',
        created: '2022-01-31'
    },
    {
        name: 'Christine',
        created: '2022-01-31'
    },
    {
        name: 'Evelynn',
        created: '2022-01-31'
    },
    {
        name: 'Mary',
        created: '2022-01-31'
    },
    {
        name: 'Maybel',
        created: '2022-01-31'
    },
    {
        name: 'Seraphine',
        created: '2022-01-31'
    },
    {
        name: 'Akali',
        created: '2022-01-31'
    },
    {
        name: 'Aries',
        created: '2022-01-31'
    },
    {
        name: 'Bruno',
        created: '2022-01-31'
    },
    {
        name: 'Ivy',
        created: '2022-01-31'
    },
    {
        name: 'Peter',
        created: '2022-01-31'
    },
    {
        name: 'Ryan',
        created: '2022-01-31'
    },
    {
      name: 'Bruno',
      created: '2022-01-31'
  },
  {
      name: 'Ivy',
      created: '2022-01-31'
  },
  {
      name: 'Peter',
      created: '2022-01-31'
  },
  {
      name: 'Ryan',
      created: '2022-01-31'
  },
  {
    name: 'Bruno',
    created: '2022-01-31'
  },
  {
      name: 'Ivy',
      created: '2022-01-31'
  },
  {
      name: 'Peter',
      created: '2022-01-31'
  },
  {
      name: 'Ryan',
      created: '2022-01-31'
  },
  ]

  doInfinite(event)
  {
    console.log('doing infinite...');
    setTimeout(() => {
      for(let i=0; i<this.contacts.length; i++)
      {
        this.data.push(this.contacts[i]);
      }
      event.complete();
    }, 500);
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
}
