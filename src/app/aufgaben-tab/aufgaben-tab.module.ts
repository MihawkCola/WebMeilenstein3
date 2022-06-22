import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AufgabenTabPageRoutingModule } from './aufgaben-tab-routing.module';

import { AufgabenTabPage } from './aufgaben-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AufgabenTabPageRoutingModule
  ],
  declarations: [AufgabenTabPage]
})
export class AufgabenTabPageModule {}
