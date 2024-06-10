import {
  Component,
  EventEmitter,
  Input,
  Output,
  computed,
  input,
  output,
} from '@angular/core';
import { type IUser } from './user.models';
import { CardComponent } from '../shared/card.component';


// const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
})
export class UserComponent {
  //SENZA SIGNALS
  @Input({required: true}) selected!: boolean;
  @Input({ required: true }) user!: IUser;
  @Output() select = new EventEmitter<string>();
  /*
  MORE RECENT
  select = output<string>();
  */
  //SENZA SIGNALS
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
  //SIGNALS
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => {
  //   return "assets/users/" + this.avatar();
  // })

  // selectedUser = signal(DUMMY_USERS[randomIndex]);

  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  // // get imagePath(){ OLD
  // //   return "assets/users/" + this.selectedUser.avatar;
  // // }
  // onSelectUser(){
  //   const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  //   // this.selectedUser = DUMMY_USERS[randomIndex]; OLD
  // }
}
