import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ModalController } from '@ionic/angular';
import { AddTaskPage } from '../modal/add-task/add-task.page';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-aufgaben-tab',
  templateUrl: './aufgaben-tab.page.html',
  styleUrls: ['./aufgaben-tab.page.scss'],
})
export class AufgabenTabPage implements OnInit {

  dataReturned: any;
  
  constructor(private taskService:TasksService, public modalController: ModalController) { }

  ngOnInit() {
  }
  getTasks(){
    return this.taskService.getTasks().filter(tasks => !tasks.erledigt);
  }
  async addTask(){
    const modal = await this.modalController.create({
      component: AddTaskPage,
    });

    /*modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });*/
    return await modal.present();
  }
  deleteTask(task){
    this.taskService.deleteTask(task);
  }
  completedTaks(task){
    this.taskService.completedTaks(task);
  }
}
