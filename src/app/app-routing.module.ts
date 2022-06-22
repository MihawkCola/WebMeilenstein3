import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'aufgaben-tab',
    loadChildren: () => import('./aufgaben-tab/aufgaben-tab.module').then( m => m.AufgabenTabPageModule)
  },
  {
    path: 'completed-tasks-tab',
    loadChildren: () => import('./completed-tasks-tab/completed-tasks-tab.module').then( m => m.CompletedTasksTabPageModule)
  },
  {
    path: 'settings-tab',
    loadChildren: () => import('./settings-tab/settings-tab.module').then( m => m.SettingsTabPageModule)
  },
  {
    path: 'help-tab',
    loadChildren: () => import('./help-tab/help-tab.module').then( m => m.HelpTabPageModule)
  },
  {
    path: 'add-task',
    loadChildren: () => import('./modal/add-task/add-task.module').then( m => m.AddTaskPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
