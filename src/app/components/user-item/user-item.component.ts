import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/User';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent {
  @Input()
  user!: User;
  faTimes = faTimes;
  @Output() onDeleteUser: EventEmitter<User> = new EventEmitter();


  // emit onDeleteUser to parent Component
  onDelete(user:User){
    this.onDeleteUser.emit(user);
  }

}
