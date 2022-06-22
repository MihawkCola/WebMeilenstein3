import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'aufgaben',
        loadChildren: () => import('../aufgaben-tab/aufgaben-tab.module').then(m => m.AufgabenTabPageModule)
      },
      {
        path: 'completedTasks',
        loadChildren: () => import('../completed-tasks-tab/completed-tasks-tab.module').then(m => m.CompletedTasksTabPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings-tab/settings-tab.module').then(m => m.SettingsTabPageModule)
      },
      {
        path: 'help',
        loadChildren: () => import('../help-tab/help-tab.module').then(m => m.HelpTabPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/aufgaben',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/aufgaben',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
