import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostOverviewComponent } from './components/post-overview/post-overview.component';



@NgModule({
  declarations: [PostDetailsComponent, PostOverviewComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PostDetailsComponent, PostOverviewComponent
  ]
})
export class PostModule { }
