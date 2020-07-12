import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coding-challenge';

  modeSubject = new Subject<boolean>();
  endpoint = 'http://api.front.challenge.dev.monospacelabs.com';

  constructor(private http: HttpClient) { }

  /* getUsers(): Observable<HttpResponse<>> {
    return this.http.get(
      this.endpoint, { observe: 'response' });
    } */
  
}
