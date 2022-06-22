import { Injectable } from '@angular/core';
import { Task } from '../entity/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  localStorageName:string = "TasksService";
  private tasks:Task[] = [];

  constructor() { 
    var tmp = localStorage.getItem(this.localStorageName);
    
    if (tmp){  
      this.tasks = JSON.parse(tmp);
    } else{
      this.addBooks('Schuhe','macht spaß', '26-12-1997', '26-12-2022', 30, false);
      this.addBooks('Irgendwas','nicht spaß', '26-12-2019', '26-12-2022', 40, true);
    }

    console.log(this.tasks)
  }
  getTasks(){
    return this.tasks;
  }
  addBooks(titel : string, beschreibung : string, erstellt : string, abgabe: string, dauer: number, erledigt: boolean){
    this.tasks.push({
      'titel': titel,
      'beschreibung': beschreibung,
      'erstellt': erstellt,
      'abgabe' : abgabe,
      'dauer' : dauer,
      'erledigt' : erledigt
    });
    this.persist();
  }
  completedTaks(task){
    task.erledigt = true;
    this.persist();
  }
  deleteTask(task)
  {
    this.tasks.splice(this.tasks.indexOf(task), 1);
    this.persist();
  }
  persist()
  {
    localStorage.setItem(this.localStorageName, JSON.stringify(this.tasks));
  }
  deleteAll()
  {
    this.tasks = [];
    this.persist();
  }
   
}
