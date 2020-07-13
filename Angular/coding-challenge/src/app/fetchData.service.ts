import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private http: HttpClient) {}

  public fetchData (){
    this.http.get("http://api.front.challenge.dev.monospacelabs.com");
  }
  
}