import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private url ="https://reqres.in/api/users";

  constructor(private httpClient: HttpClient) { }

  helloService(){
    return "Hello From Angular Service";
  }

  getUser(){
    return this.httpClient.get(this.url);
  }
}
