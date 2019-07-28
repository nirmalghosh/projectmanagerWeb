import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private app: AppService, private http: HttpClient, private router: Router) { }
  credentials = { username: '', password: '' };
  ngOnInit() {
  }

  register() {

    const url = 'http://localhost:8080/SpringDataWeb/register';
     this.http.post(url, {
      'username': this.credentials.username, 'password': this.credentials.password
    }).subscribe(isValid => {
      if (isValid == 'true') {
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
