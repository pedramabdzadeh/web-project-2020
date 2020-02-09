import {Component, Input, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-post-overview',
  templateUrl: './post-overview.component.html',
  styleUrls: ['./post-overview.component.scss']
})
export class PostOverviewComponent implements OnInit {
  @Input() type: string;
  @Input() postVariables: {
    title: string,
    score: number,
    content: any,
    comments: number,
    channelLink: string,
    id: number,
  } = {
    title: 'sample',
    score: 123,
    content: 'sample sample sample',
    comments: 123123,
    channelLink: '/channels/123/posts',
    id: 1,
  };
  @Input() title = 'sample';
  @Input() score = 123;
  @Input() content = 'sample sample sample';
  @Input() comments = 123123;
  @Input() channelLink = 'asdf/asdf/';
  dislikeButtonClass: any = [];
  likeButtonClass: any = [];

  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIcon('like',
      domSanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/icon/like.svg'));
    matIconRegistry.addSvgIcon('dislike',
      domSanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/icon/bad.svg'));
  }

  ngOnInit() {
  }

  like() {
    this.dislikeButtonClass = ['dislike-icon'];
    this.likeButtonClass = ['like-icon-selected'];
  }
  dislike() {
    this.likeButtonClass = ['like-icon'];
    this.dislikeButtonClass = ['dislike-icon-selected'];
  }
}
