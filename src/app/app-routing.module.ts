import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './components/main-page/main-page.component';


const routes: Routes = [
  {
    path: 'home', component: MainPageComponent
  },
  {
    path: '', pathMatch: 'full', redirectTo: '/home'
  },
  {
    path: 'channels',
    loadChildren: () => import('./features/channel/channel.module').then(m => m.ChannelModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
