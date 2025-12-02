import { Injectable, signal } from '@angular/core';
import { ITask } from '../interfaces/itask';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public tasks = signal<ITask[]>([]);
  private sequenceCounter: number = 0;

  constructor() {
    this.tasks = signal(localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')!) : this.tasks);
    this.sequenceCounter = localStorage.getItem('sequenceCounter') ? JSON.parse(localStorage.getItem('sequenceCounter')!) : 0;
  }

  addTask(task: ITask): void {
    task.sequence = this.sequenceCounter + 1;
    this.sequenceCounter++;
    this.tasks.update(tasks => [...tasks, task]);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    localStorage.setItem('sequenceCounter', JSON.stringify(this.sequenceCounter));
  }

  deleteTask(sequence: number): void {
    this.tasks.update(tasks => tasks.filter(task => task.sequence !== sequence));
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
