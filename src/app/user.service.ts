import { Injectable } from "@angular/core";
import { count } from "console";
import { CounterService } from "./count.service";

@Injectable()
export class UserService
{
    activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  /**
   *
   */
  constructor(private countService:CounterService) {
      
  }
  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.countService.incrementActiveToInactive();
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.countService.incrementInActiveToActive();
  }
}