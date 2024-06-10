import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  selectedUserId?: string;
  title = 'first-project';
  users = DUMMY_USERS;

  get selectedUser(){
    return this.users.find((item) => item.id === this.selectedUserId);
  }
  onSelectUser(id: string){
    this.selectedUserId = id;
  }
}
