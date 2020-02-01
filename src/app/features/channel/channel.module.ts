import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelRoutingModule } from './channel-routing.module';
import { ChannelComponent } from './channel.component';
import {PostModule} from '../post/post.module';


@NgModule({
  declarations: [ChannelComponent],
  imports: [
    CommonModule,
    ChannelRoutingModule,
    PostModule
  ]
})
export class ChannelModule { }
