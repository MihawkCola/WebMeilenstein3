import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelpTabPageRoutingModule } from './help-tab-routing.module';

import { HelpTabPage } from './help-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelpTabPageRoutingModule
  ],
  declarations: [HelpTabPage]
})
export class HelpTabPageModule {}
