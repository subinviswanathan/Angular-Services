import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users$;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.users$ = this._userService.getAll();
  }

}
