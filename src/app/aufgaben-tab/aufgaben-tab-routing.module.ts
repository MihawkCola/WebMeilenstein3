import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AufgabenTabPage } from './aufgaben-tab.page';

const routes: Routes = [
  {
    path: '',
    component: AufgabenTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AufgabenTabPageRoutingModule {}
