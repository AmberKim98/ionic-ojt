import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  data: any;
  isSubmitted = false;

  constructor(private router: Router) {
    this.data = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      address: ''
    }
   }

  onSubmit(myForm: NgForm) {
    console.log('hello');
    this.isSubmitted = true;
    console.log('---valid check---', myForm.valid);
    if(myForm.valid)
    {
      this.router.navigate(['/nextstep']);
    }
  }

  ngOnInit() {
  }

}
