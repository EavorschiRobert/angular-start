import { Injectable } from "@angular/core";
import { INewTask } from "./new-task/new-task.models";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private DUMMY_TASKS = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];
  constructor(){
    const tasks = localStorage.getItem("tasks");

    if(tasks){
      this.DUMMY_TASKS = JSON.parse(tasks);
    }
  }
  getUserTasks(taskId: string){
    return this.DUMMY_TASKS.filter((item) => item.userId === taskId);
  }
  addTask(taskData: INewTask, id: string){
    this.DUMMY_TASKS.push({
      id: new Date().getTime().toString(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
      userId: id,
    });
    this.saveTasks();
  }
  removeTask(taskId: string){
    this.DUMMY_TASKS = this.DUMMY_TASKS.filter((item) => item.id !== taskId);
    this.saveTasks();
  }
  private saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(this.DUMMY_TASKS));
  }
}
