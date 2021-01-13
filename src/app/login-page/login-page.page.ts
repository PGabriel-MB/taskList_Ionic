import { Component, OnInit } from '@angular/core';
import { RequestApiService } from '../api/reques-api/request-api.service';
import { StorageService } from '../api/storage/storage.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
  // Login
  username: string = '';
  password: string = '';

  // Registrate
  email: string = '';
  password1: string = '';
  password2: string = '';

  tokenKey: string = '';

  constructor(public strg: StorageService, public request: RequestApiService) { }

  ngOnInit() {
  }

  sendLogin() {
    this.request.postRequest(
      'rest_auth/login/', 
      { username: this.username, password: this.password },
      true
    ).then(async r => {
      this.strg.setToken(await r.data);
      this.strg.setUser({
        username: this.username 
      });
    });
  }

  sendRegistrate() {
    let obj = {
      username: this.username,
      email: this.email,
      password1: this.password1,
      password2: this.password2
    }

    this.request.postRequest('res_auth/registration/', obj, true).then(async r => {
      this.strg.setToken(await r.data);
      this.strg.setUser({
        username: this.username 
      });
    });
  }

}
