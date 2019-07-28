import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  priority: Number;
  usersdata: any[];
  manager: {};
  constructor() { }

  ngOnInit() {
    this.usersdata = JSON.parse(sessionStorage.getItem('users'));
    
  }
  setRam() {
   
  }

  
  formatter = (result: any) => result.firstName;
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.usersdata.filter(v => v.firstName.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  addProject() {
    console.log(this.manager);
  }
  selectedItem(item) {
    this.manager = item.item;
    console.log(item);
  }
}
