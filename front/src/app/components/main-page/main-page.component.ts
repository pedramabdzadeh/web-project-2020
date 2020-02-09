import { Component, OnInit } from '@angular/core';
import {Post} from '../../models/post';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  posts: Post[] = [
    // {title: 'lol', content: 'laughing out load laughing out load laughing out load laughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out load laughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out load laughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out load laughing out loadlaughing out load laughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out load laughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out loadlaughing out load  loadlaughing out loadlaughing out load loadlaughing out loadlaughing out load loadlaughing out loadlaughing out load loadlaughing out loadlaughing out load loadlaughing out loadlaughing out load loadlaughing out loadlaughing out load********** '
    // },
    // {title: 'lol2', content: 'laughing out load2'},
    // {title: 'lol2', content: 'laughing out load2'},
    // {title: 'lol2', content: 'laughing out load2'},
    // {title: 'lol2', content: 'laughing out load2'},
    // {title: 'lol2', content: 'laughing out load2'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
