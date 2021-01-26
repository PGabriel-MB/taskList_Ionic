import { Injectable } from '@angular/core';
import axios from "axios";
import { StorageService } from '../storage/storage.service';


@Injectable({
  providedIn: 'root'
})
export class RequestApiService {

  url: string = 'http://127.0.0.1:8000/';
  token: string = '';

  constructor(public strg: StorageService) { }

  async getRequest(route: string): Promise<any> {
    return await this.strg.getToken().then(async r => {
      this.token = await r.key;
      
      return await axios({
        method: 'GET',
        url: this.url + route,
        headers: { 'Authorization': 'Token ' + this.token, 'Content-Type': 'application/json' }
      }).then(async r => {
        return await r.data;
      });
    });

  }

  async postRequest(route: string, data: any, withoutHeader: boolean = false): Promise<any> {
    let request = null;
    
    if (withoutHeader) {
      request = await axios({
        method: 'POST',
        url: this.url + route,
        headers: { 'Content-Type': 'application/json' },
        data,
      }).then(async r => {
        return await r;
      });
    } else {
      this.strg.getToken().then(async r => {
        this.token = await r.key;

        return request = await axios({
          method: 'POST',
          url: this.url + route,
          headers: { 'Authorization': 'Token ' + this.strg.getToken(), 'Content-Type': 'application/json' },
          data,
        }).then(async r => {
          return await r;
        }); 
      });
    }

    return request;
  }
}
