import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from "@ionic/angular";

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

  constructor(
    public strg: StorageService,
    public request: RequestApiService,
    public toastCtrlr: ToastController,
    public router: Router
  ) { }

  ngOnInit() {
    this.strg.getUser().then(async r => {
      if (await r) {
        this.username = r.username;
        this.password = r.password;

        this.sendLogin();
      }
    });
  }

  async presentToast() {
    const toast = await this.toastCtrlr.create({
      message: 'Cadastro criado realizado com Sucesso! Retorne a tela de Login para realizar o acesso.',
      duration: 5000
    });
    toast.present();
  }

  enterHomePage(){
    this.router.navigate(['/home']);
  }

  isEmpty() {
    if (!this.username || !this.password)
      return true
    return false
  }

  async presentToastAlertMessage(message) {
    const toast = await this.toastCtrlr.create({
      message,
      duration: 3000
    });
    toast.present();
  }

  sendLogin() {
    if (this.isEmpty()) {
      this.presentToastAlertMessage('Preencha corretamente todos os Campos!');
      return;
    }

    this.request.postRequest(
      'rest_auth/login/', 
      { username: this.username, password: this.password },
      true
    ).then(async r => {
      this.strg.setToken(await r.data);
      this.strg.setUser({
        username: this.username,
        password: this.password
      });

      this.enterHomePage();
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
      this.presentToast();
    });
  }

}
