import { Component, Input } from "@angular/core";
import { ITasks } from "../types";

@Component({
  standalone: true,
  selector: "app-task",
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent{
  @Input() tasks?: ITasks;
}