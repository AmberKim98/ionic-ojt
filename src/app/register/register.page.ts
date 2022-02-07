import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { alertController } from '@ionic/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  data: any;
  isSubmitted = false;
  public db_obj: SQLiteObject;
  row_data: any = [];
  // public name_model: string = "";

  constructor(private router: Router, private sqlite: SQLite, private platform: Platform) {
    this.data = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      address: ''
    }

    this.platform.ready().then(() => {
      this.createDB();
      this.createTable();
    })
    .catch(err => {
      console.log(err);
    })
   }

  ngOnInit() {
  }

  onSubmit(myForm: NgForm) {
    console.log('hello');
    this.isSubmitted = true;
    console.log('---valid check---', myForm.valid);
    console.log('---data---', this.data);
    if(myForm.valid)
    {
      this.insertDB();
      this.router.navigate(['/nextstep']);
    }
  }

  /**
   * Create users database.
   * 
   */
  createDB() {
    this.sqlite.create({
      name: 'testing.db',
      location: 'default'
    })
    .then((db: SQLiteObject) => {
      this.db_obj = db;
      console.log('Database was created.');
    })
    .catch(err => {
      console.log(err);
    })
  }

  /**
   * Create users table. 
   * 
   */
  createTable() {
    this.db_obj.executeSql('CREATE TABLE users(uid INTEGER PRIMARY KEY, name VARCHAR(255))', [])
    .then(() => console.log('Database was created!'))
    .catch(err => console.log(err));
  }

  /**
   * Insert data into database.
   * 
   */
  insertDB() {
    this.db_obj.executeSql(`INSERT INTO users (name) VALUES ('${this.data.name}')`, [])
    .then(() => {
      console.log('A user was created!');
    })
  }

  /**
   * Get list of users.
   * 
   */
  getUsers() {
    this.db_obj.executeSql('SELECT * FROM users', [])
    .then((res) => {
      this.row_data = [];
      if(res.rows.length > 0)
      {
        for(var i=0; i<res.rows.length; i++)
        {
          this.row_data.push(res.rows.item(i));
        }
      }
      console.log('---users---',this.row_data);
    })
  }

  /**
   * Update user.
   * 
   */
  async showUpdatePrompt(user) {
    console.log('---user id---', user.uid);
    const alert = await alertController.create({
      header: 'Update Username',
      inputs: [
        {
          name: 'name',
          type: 'text',
          label: 'Username',
          placeholder: user.name,
        }
      ],
      buttons: [
        {
          text: 'Update',
          handler: (data) => {
            console.log('--input data---',data);
            this.updateUser(user, data.name);
          }
        },
        {
          text: 'Cancel',
          role: 'Cancel'
        }
      ]
    }) 
  alert.present();
  }

  updateUser(user, updateName) {
    console.log('---before updating user name---', user);
    this.db_obj.executeSql(`UPDATE users SET name = '${updateName}' WHERE uid = ${user.uid}`, [])
    .then(() => {
      console.log('--updated info---',user);
      this.getUsers();
    })
    .catch(err => {
      console.log(err);
    })
  }

  async showDeleteAlert(user) {
    const alert = await alertController.create({
      subHeader: 'Are you sure you want to delete?',
      buttons: [
        {
          text: 'Delete',
          handler: () => {
            this.deleteUser(user);
          }
        },
        {
          text: 'Cancel',
          role: 'Cancel'
        }
      ]
    })
    alert.present();
  }

  deleteUser(user) {
    this.db_obj.executeSql(`DELETE FROM users WHERE uid = ${user.uid}`, [])
    .then((res) => {
      console.log('Successfully deleted!');
      this.getUsers();
    })
    .catch(err => {
      console.log(err);
    })
  }
}
