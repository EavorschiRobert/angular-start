import { Component, Input } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { INewTask } from "./new-task/new-task.models";
import { TaskService } from "./tasks.service";
import { ITasks } from "./task/task.models";
import { DUMMY_TASKS } from "../dummy-tasks";

@Component({
  selector: "app-tasks",
  standalone: true,
  templateUrl: "./tasks.component.html",
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent],
})
export class TasksComponent{
  @Input({required: true}) id!: string;
  @Input({required: true}) name!: string;
  private taskService: TaskService;
  constructor(tasksService: TaskService){
    this.taskService = tasksService;
  }
  showTask = false;
  get selectedUserTask(){
    return this.taskService.getUserTasks(this.id);
  }

  // onCompleteTask(id: string){
  //   this.tasks = this.tasks.filter((task) => task.id !== id);
  // }
  onCloseAddTask(){
    this.showTask = !this.showTask;
  }
}