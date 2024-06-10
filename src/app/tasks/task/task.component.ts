import { Component, EventEmitter, Input, Output, inject } from "@angular/core";
import { type ITasks } from "./task.models";
import { CardComponent } from "../../shared/card.component";
import { DatePipe } from "@angular/common";
import { TaskService } from "../tasks.service";


@Component({
  standalone: true,
  selector: "app-task",
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  imports: [CardComponent, DatePipe]
})
export class TaskComponent{
  @Input() tasks?: ITasks;
  // @Output() complete = new EventEmitter<string>();
  private taskService = inject(TaskService);

  onCompleteTask(){
    this.taskService.removeTask(this.tasks!.id);
    // this.complete.emit(this.tasks!.id);
  }
}