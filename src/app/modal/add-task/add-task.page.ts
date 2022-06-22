import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {
  titel:string = '';
  beschreibung:string = '';
  dauer:number = 0;

  constructor(public modalController: ModalController, private taskService:TasksService,) { }

  ngOnInit() {
  }
  closeModal() {
    this.modalController.dismiss();
  }
  addTask(){
    this.taskService.addBooks(this.titel,this.beschreibung, '26-12-1997', '26-12-2022', this.dauer, false);
    this.modalController.dismiss();
  }
}
