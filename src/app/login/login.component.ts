import { Component, OnInit, Injectable } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient, HttpHeaders, HttpInterceptor, HttpRequest, HttpHandler, } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {

  credentials = { username: '', password: '' };

  constructor(private app: AppService, private http: HttpClient, private router: Router) {
  }
  ngOnInit() {
    sessionStorage.setItem('token', '');
  }
  
  login() {
        
    const url = 'http://localhost:8080/SpringDataWeb/login';
      
    this.http.post(url, {
      'username': this.credentials.username, 'password': this.credentials.password
    }).subscribe(isValid => {
      if (isValid =='true') {
        sessionStorage.setItem(
          'token',
          btoa(this.credentials.username + ':' + this.credentials.password)
        );
        this.router.navigate(['']);
      } else {
        alert("Authentication failed.")
      }
    });
    
  }

}
