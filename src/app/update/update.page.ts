import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserCrudService } from '../services/users/user-crud.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  updateForm: FormGroup;
  id: any;

  constructor(
    private userCrudService: UserCrudService,
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) { 
    this.id = this.activatedRoute.snapshot.paramMap.get('id'); //get current user id from route
  }

  ngOnInit() {
    this.fetchUser(this.id);
    this.updateForm = this.formBuilder.group({
      name: [''],
      email: [''],
      username: ['']
    })
  }

  fetchUser(id) {
    this.userCrudService.getUser(id)
    .subscribe((data) => {
      this.updateForm.setValue({
        name: data['name'],
        email: data['email'],
        username: data['username']
      });
    });
  }

  onSubmit() {
    if(!this.updateForm.valid) {
      return false;
    }
    else {
      this.userCrudService.updateUser(this.id, this.updateForm.value)
      .subscribe(() => {
        this.updateForm.reset();
        this.router.navigate(['/list']);
      })
    }
  }
}
