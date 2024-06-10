import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ITasks } from '../task/task.models';
import { INewTask } from './new-task.models';

@Component({
  selector: 'app-new-task',
  standalone: true,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
  imports: [FormsModule]
})
export class NewTaskComponent {
  @Output() showModal = new EventEmitter<void>();
  @Output() add = new EventEmitter<INewTask>();
  // enteredTitle = signal(""); WITH SIGNALS
  enteredTitle = "";
  enteredSummary = "";
  enteredDate = "";
  toggleModal() {
    this.showModal.emit();
  }
  handleSubmit(){
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    })
  }
}
