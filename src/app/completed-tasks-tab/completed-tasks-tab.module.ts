import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompletedTasksTabPageRoutingModule } from './completed-tasks-tab-routing.module';

import { CompletedTasksTabPage } from './completed-tasks-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompletedTasksTabPageRoutingModule
  ],
  declarations: [CompletedTasksTabPage]
})
export class CompletedTasksTabPageModule {}
