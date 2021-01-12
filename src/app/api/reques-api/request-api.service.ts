import { Injectable } from '@angular/core';
import axios from "axios";
import { StorageService } from '../storage/storage.service';


@Injectable({
  providedIn: 'root'
})
export class RequestApiService {

  url: string = 'http://localhost:8000/';

  constructor( public strg: StorageService) { }

  async getRequest(route: string): Promise<any> {
    let request = await axios({
      method: 'GET',
      url: this.url + route,
      headers: { 'Authorization': 'Token ' + this.strg.getToken() }
    }).then(async r => {
      return await r;
    });

    return request;
  }

  async postRequest(route: string, data: any, toLogin: boolean = true): Promise<any>{
    let request = null;
    
    if (toLogin) {
      request = await axios({
        method: 'POST',
        data,
      }).then(async r => {
        return await r;
      });
    }
    
    request = await axios({
      method: 'POST',
      headers: { 'Authorization': 'Token ' + this.strg.getToken() },
      data,
    }).then(async r => {
      return await r;
    });

    return request;
  }
}
