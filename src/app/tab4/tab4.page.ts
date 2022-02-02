import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;

  constructor() { }

  scrollToTop() {
    this.content.scrollToTop(1500);
  }

  ngOnInit() {
  }

}
