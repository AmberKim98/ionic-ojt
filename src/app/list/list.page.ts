import { Component, OnInit } from '@angular/core';
import { UserCrudService } from '../services/users/user-crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  Users:any = [];

  constructor(
    private userCrudService: UserCrudService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.userCrudService.getUsers().subscribe((response) => {
      this.Users = response;
    })
  }

  deleteUser(user) {
    if(window.confirm('Are you sure to delete?')) {
      this.userCrudService.deleteUser(user.id)
      .subscribe(() => {
        this.ionViewDidEnter();
        console.log('User deleted!');
      })
    }
  }
}
