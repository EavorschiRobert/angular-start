import { Component, Input } from "@angular/core";
import { TaskComponent } from "../task/task.component";
import { DUMMY_TASKS } from "../dummy-tasks";
import { NewTaskComponent } from "../new-task/new-task.component";
import { INewTask } from "../new-task/new-task.models";

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
  showTask = false;
  tasks = DUMMY_TASKS;
  get selectedUserTask(){
    return this.tasks.filter((item) => item.userId === this.id);
  }

  onCompleteTask(id: string){
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  handleToggleTask(){
    this.showTask = !this.showTask;
  }
  onAddTask(taskData: INewTask){
    this.tasks.push({
      id: new Date().getTime().toString(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
      userId: this.id,
    })
    this.handleToggleTask();
  }
}