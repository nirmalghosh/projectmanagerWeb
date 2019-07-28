import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private appService: AppService) { }
  firstName: String;
  lastName: String;
  employeeID: String;
  users: {};
  addUpdateLabel: String;
  searchText: String;
  firstNameField: String;
  ngOnInit() {
    this.searchText = '';
    this.addUpdateLabel = 'Add';
    this.viewUsers();
  }
  addUser() {
    
    try {
      this.appService.addUser(this.firstName, this.lastName, this.employeeID)
        .subscribe(resp => {
          console.log(resp, "res");
          this.firstName = '';
          this.lastName = '';
          this.employeeID = '';
          this.viewUsers();
        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }
  reset() {
          this.firstName = '';
          this.lastName = '';
          this.employeeID = '';
  }

  viewUsers() {

    try {
      this.appService.viewUsers()
        .subscribe(resp => {
          console.log(resp, "res");
          this.users = resp;
          sessionStorage.setItem(
            'users', JSON.stringify(resp));
          },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }
  delete(employeeID) {
    try {
      this.appService.deleteUser(employeeID)
        .subscribe(resp => {
          console.log(resp, "res");
          this.viewUsers();
          
        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }
  edit(user) {
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.employeeID = user.employeeID;
    this.addUpdateLabel = 'Update';
    this.firstNameField = 'firstName';
  }

  sortByField(property) {
    console.log(property);
     
    var data = [];

    for (var i in this.users) {
      data.push(this.users[i]);
    }
    data.push(this.users);
    var sortByProperty = function (property) {
      return function (x, y) {
        return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1));
      };
    };
    data.sort(sortByProperty(property));
    data.splice(0, 1);
    this.users = data;
  }
}
