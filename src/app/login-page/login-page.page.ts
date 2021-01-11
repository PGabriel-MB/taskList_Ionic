import { Component, OnInit } from '@angular/core';
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
  tokenKey: string = '';
  
  constructor( strg: StorageService) { }

  ngOnInit() {
  }

  sendLogin() {
    
  }

}
