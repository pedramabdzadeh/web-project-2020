import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../../../models/comment';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIcon('like',
      domSanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/icon/like.svg'));
    matIconRegistry.addSvgIcon('dislike',
      domSanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/icon/bad.svg'));
  }

  ngOnInit() {
  }

}
