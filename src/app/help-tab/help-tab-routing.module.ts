import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpTabPage } from './help-tab.page';

const routes: Routes = [
  {
    path: '',
    component: HelpTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpTabPageRoutingModule {}
