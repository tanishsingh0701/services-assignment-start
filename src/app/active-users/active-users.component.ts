import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent {
  /**
   *
   */
  constructor(private usersService:UserService) {
  }
  @Input() users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();

  onSetToInactive(id: number) {
    // this.userSetToInactive.emit(id);
    this.usersService.onSetToInactive(id);
  }
}
