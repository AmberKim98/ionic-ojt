import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserCrudService } from '../services/users/user-crud.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {

  userForm: FormGroup;
  id: any;

  constructor(
    private userCrudService: UserCrudService,
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) { 
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    console.log('user profile is showing....');
    this.fetchUser(this.id);
    this.userForm = this.formBuilder.group({
      name: [''],
      email: [''],
      username: ['']
    })
  }

  fetchUser(id) {
    this.userCrudService.getUser(id)
    .subscribe((data) => {
      this.userForm.setValue({
        name: data['name'],
        email: data['email'],
        username: data['username']
      });
    });
  }
}
