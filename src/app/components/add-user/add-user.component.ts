import { Component } from '@angular/core';
import { User } from 'src/app/User';
import { faHome} from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  name: string = "";
  email: string = "";
  faHome =  faHome;
  displayMessage: boolean = false;

  constructor(private userService: UserService){
    
  }

  onSubmit(){

    // validate user input. Both fields are required.

    if(this.name.trim().length < 1 || this.email.trim().length < 1 ){
      alert('Please fill out all fields');
      return;
    }

    const newUser: User = {
      name: this.name,
      email: this.email
    };

    // Use service to add user via POST request. Display success message and hide it after 3 seconds

    this.userService.addUser(newUser).subscribe((usr)=>{
      this.displayMessage = true;
      setTimeout(()=>{this.displayMessage = false;}, 3000);
    });
 
    // clear the form
    this.name = "";
    this.email = "";

  }

}
