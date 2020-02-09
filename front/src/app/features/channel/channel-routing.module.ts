import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChannelComponent } from './channel.component';
import {PostDetailsComponent} from '../post/components/post-details/post-details.component';

const routes: Routes = [
  {
    path: ':channelID',
    redirectTo: ':channelID/posts',
    pathMatch: 'full'
  },
  {
    path: ':channelID/posts',
    component: ChannelComponent
  },
  {
    path: ':channelID/posts/:postID',
    component: PostDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChannelRoutingModule { }
