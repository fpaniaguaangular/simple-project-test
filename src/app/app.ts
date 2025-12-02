import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from "./components/task-component/task-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('simple-project-test');
}
