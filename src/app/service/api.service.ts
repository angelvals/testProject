import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

  constructor(private readonly http: HttpClient) { }

  getUrl() {
    return `https://api.publicapis.org/`;
  }

  makeRequest(serviceKey: string, params = {}, httpMethod = 'POST') {
    if (httpMethod === 'GET') {
      return this.http.get(`${this.getUrl()}${serviceKey}`);
    } else {
      return this.http.post(`${this.getUrl()}${serviceKey}`, params);
    }
  }
}