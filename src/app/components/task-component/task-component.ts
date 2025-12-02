import { Component, effect, inject } from '@angular/core';
import { ITask } from '../../interfaces/itask';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task-service';

@Component({
  selector: 'app-task-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-component.html',
  styleUrl: './task-component.css',
})
export class TaskComponent {
  private taskService = inject(TaskService);
  public newTask: ITask;
  public tasks: ITask[] = this.taskService.tasks();

  constructor() {
    effect(() => {
      this.tasks = this.taskService.tasks();
    });
    this.newTask = this.initializeNewTask();
  }

  initializeNewTask(): ITask {
    return {
      sequence: 0, // Se calculará al añadir
      name: '',
      priority: 'Media', // Valor por defecto
      description: ''
    };
  }

  onSubmit(): void {
    console.log('Formulario enviado:', this.newTask);
    this.taskService.addTask(this.newTask);
    this.newTask = this.initializeNewTask();
  }

  deleteTask(sequence: number): void {
    this.taskService.deleteTask(sequence);
  }
}
