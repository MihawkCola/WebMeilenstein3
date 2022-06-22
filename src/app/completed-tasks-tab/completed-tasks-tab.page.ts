import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-completed-tasks-tab',
  templateUrl: './completed-tasks-tab.page.html',
  styleUrls: ['./completed-tasks-tab.page.scss'],
})
export class CompletedTasksTabPage implements OnInit {

  constructor(private taskService:TasksService) { }

  ngOnInit() {
  }

  deleteTask(task){
    this.taskService.deleteTask(task);
  }
  getTasks(){
    return this.taskService.getTasks().filter(tasks => tasks.erledigt);
  }
}
