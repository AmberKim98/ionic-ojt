import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import * as friends from "../const/data";

@Component({
  selector: 'app-friendslist',
  templateUrl: './friendslist.page.html',
  styleUrls: ['./friendslist.page.scss'],
})
export class FriendslistPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  
  public data = friends;
  public friendsList = [];

  constructor() { }

  ngOnInit() {
    let max = this.data.contacts.length;
    let min = max - 30;
    console.log('---max---',max);
    for(var i=0; i<min; i++)
    {
      this.friendsList.push(this.data.contacts[i]);
    }
  }

  loadData(event)
  {
    let length = this.friendsList.length;
    let max = length + 8;
    setTimeout(() => {
      if(max <= this.data.contacts.length)
      {
        for(var i=length; i<max; i++)
        {
          this.friendsList.push(this.data.contacts[i]);
        }
      }
      event.target.complete();
    }, 500);
  }
}
