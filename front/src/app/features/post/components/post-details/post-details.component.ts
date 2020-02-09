import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {Post} from '../../../../models/post';
import {Comment} from '../../../../models/comment';


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  likeButtonClass: any;
  dislikeButtonClass: any;
  comments: Comment[] = [new Comment(1, '12312', 123, 1, [
      new Comment(2, 'qweq', 12, 1, [
        new Comment(2, 'qweq', 12, 1, undefined )
      ] ),
      new Comment(2, 'qweq', 12, 1, undefined )
    ])
  ];

  post: Post = new Post(1, '1', '/channels/1/posts',
    this.comments, 123, 'asfdasdf');


  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIcon('like',
      domSanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/icon/like.svg'));
    matIconRegistry.addSvgIcon('dislike',
      domSanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/icon/bad.svg'));
  }

  ngOnInit() {
  }

  like() {

  }

  dislike() {

  }
}
