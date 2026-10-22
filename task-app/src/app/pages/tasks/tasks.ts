import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService, TaskInterface } from '../../services/task';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-tasks',
  styleUrl: './tasks.css',
  templateUrl: './tasks.html',
})
export class Tasks {
  tasks: TaskInterface[] = [];
  
  newTaskTitle: string = '';

  constructor(private taskService: TaskService){
    this.loadTasks();
  }
  loadTasks(): void{
    this.tasks = this.taskService.getTasks();
  }
  addNewTask(): void{
    if (this.newTaskTitle.trim()){
      this.taskService.addTask(this.newTaskTitle);
      this.newTaskTitle = '';
      this.loadTasks();
    }
  }

  removeTask(id: number): void{
    this.taskService.deleteTask(id);
    this.loadTasks();
  }
}
