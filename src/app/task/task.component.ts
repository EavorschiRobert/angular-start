import { Component, EventEmitter, Input, Output } from "@angular/core";
import { type ITasks } from "./task.models";
import { CardComponent } from "../shared/card.component";
import { DatePipe } from "@angular/common";


@Component({
  standalone: true,
  selector: "app-task",
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  imports: [CardComponent, DatePipe]
})
export class TaskComponent{
  @Input() tasks?: ITasks;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask(){
    this.complete.emit(this.tasks!.id);
  }
}