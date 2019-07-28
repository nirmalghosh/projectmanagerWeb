import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public appService: AppService) { }
  allBooks: any = [];
  title = 'digitalAngularWeb';
  booktitle: String;
  bookid: String;
  ngOnInit() {
  }
  getAllBooks() {
    try {
      this.appService.getAllBooks()
        .subscribe(resp => {
          console.log(resp, "res");
          this.allBooks = resp
        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }
  putBook() {
    try {
      this.appService.putBook(this.booktitle, this.bookid, "")
        .subscribe(resp => {
          console.log(resp, "res");

        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }
  postBook() {
    try {
      this.appService.postBook(this.booktitle, this.bookid, "")
        .subscribe(resp => {
          console.log(resp, "res");

        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }
  postSubject() {
    try {
      this.appService.postSubject(this.booktitle, this.bookid, "")
        .subscribe(resp => {
          console.log(resp, "res");

        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }
  
  deleteBook() {
    try {
      this.appService.deleteBook(this.booktitle)
        .subscribe(resp => {
          console.log(resp, "res");

        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }
  getBook() {
    try {
      this.appService.getBook(this.booktitle)
        .subscribe(resp => {
          console.log(resp, "res");
          this.allBooks = resp
        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }
}
