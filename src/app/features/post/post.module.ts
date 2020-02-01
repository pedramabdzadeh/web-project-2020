import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostOverviewComponent } from './components/post-overview/post-overview.component';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { CommentComponent } from './components/comment/comment.component';
import {NavigationModule} from '../navigation/navigation.module';





@NgModule({
  declarations: [PostDetailsComponent, PostOverviewComponent, CommentComponent],
  imports: [
    CommonModule,
    MatIconModule,
    HttpClientModule,
    RouterModule,
    NavigationModule
  ],
  exports: [
    PostDetailsComponent, PostOverviewComponent
  ]
})
export class PostModule { }
