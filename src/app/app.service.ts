import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AppService {
  authenticated = false;
  constructor(private http: HttpClient) { }
  

  getAllBooks() {
    const url = 'http://localhost:8080/SpringDataWeb/getAllBook';
    const headers = new HttpHeaders({ Authorization: 'Basic ' + sessionStorage.getItem('token')});
    return this.http.get(url, { headers });
  
  }
  putBook(booktitle, bookid, data) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + sessionStorage.getItem('token') });
    return this.http.put('http://localhost:8080/SpringDataWeb/putBook?booktitle=' + booktitle + '&bookId=' + bookid, data, { headers });
  }
  postBook(booktitle, bookid, data) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + sessionStorage.getItem('token') });
    return this.http.post('http://localhost:8080/SpringDataWeb/postBook?booktitle=' + booktitle + '&bookId=' + bookid, data, { headers });
  }
  postSubject(subtitle, subId, data) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + sessionStorage.getItem('token') });
    return this.http.post('http://localhost:8080/SpringDataWeb/postSubject?subtitle=' + subtitle + '&subId=' + subId, data, { headers });
  }
  deleteBook(booktitle) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + sessionStorage.getItem('token') });
    return this.http.delete('http://localhost:8080/SpringDataWeb/deleteBook?booktitle=' + booktitle, { headers });
  }
  getBook(booktitle) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + sessionStorage.getItem('token') });
    return this.http.get('http://localhost:8080/SpringDataWeb/getBook?booktitle=' + booktitle, { headers });
  }
  addUser(firstName, lastName, employeeID) {
    return this.http.post('http://localhost:8080/projectManagerWeb/addUser?firstName=' + firstName + '&lastName=' + lastName + '&employeeID=' + employeeID, {});
  }
  viewUsers() {
    return this.http.get('http://localhost:8080/projectManagerWeb/viewUser');
  }
  deleteUser(emplid) {
    return this.http.delete('http://localhost:8080/projectManagerWeb/deleteUser?employeeID='+emplid);
  }
  
}
