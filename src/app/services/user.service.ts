import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../User';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': '60b09d90-8169-11ed-996e-bd7059b3cde5'
  })
};


// sort user list by date created
const sortFunction = (a1: User, a2: User) => {
  return new Date(a1.created_on!).getTime() - new Date(a2.created_on!).getTime();
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private APIUrl = "https://treehousechallenge.contractornation.com/newsletter";

  constructor(private http: HttpClient) { }

  // GET request. Get all users, sort them by date created and reverse the list to display in descending order
  getUsers(): Observable<User[]>{
    
    return this.http.get<User []>(this.APIUrl, httpOptions).pipe(
      map(users => users.sort(sortFunction).reverse())
    );
  }

  // DELETE request. Delete a user by ID

  deleteUser(user: User): Observable<User>{

    const URL = `${this.APIUrl}/${user.id}`;

    return this.http.delete<User>(URL, httpOptions);

  }

  // POST request. Add a new user

  addUser(user: User): Observable<User>{

    return this.http.post<User>(this.APIUrl, user, httpOptions);

  }
}
