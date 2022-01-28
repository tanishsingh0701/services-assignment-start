import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  constructor(private usersService:UserService) {
  }
  @Input() users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();

  onSetToActive(id: number) {
    // this.userSetToActive.emit(id);

    this.usersService.onSetToActive(id);
  }
}
