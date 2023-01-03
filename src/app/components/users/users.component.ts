import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // array of all users
  users: User[] = [];

  constructor(private userService: UserService){

  }
  
  ngOnInit(): void {
    // OnInit get all users from the service
     this.userService.getUsers().subscribe((users)=>this.users = users);
  }

  // Send request to delete user by ID and also filter the UI list to remove the user

  deleteUser(user: User){
    this.userService.deleteUser(user).subscribe(
      ()=>{
        this.users = this.users.filter((u)=> u.id !== user.id);
      }
    );
  }


}
