import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.page.html',
  styleUrls: ['./mail.page.scss'],
})
export class MailPage implements OnInit {

  constructor(private ModalController: ModalController) { }

  dismiss() {
    this.ModalController.dismiss({
      'dismissed': true
    })
  } 

  ngOnInit() {
  }

}
