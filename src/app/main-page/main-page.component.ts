import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  posts: any[] = [
    {title: 'lol', content: 'laughing out load11111111111111111111111111111111111111111111111111111111111111111111111111111111'},
    {title: 'lol2', content: 'laughing out load2'},
    {title: 'lol2', content: 'laughing out load2'},
    {title: 'lol2', content: 'laughing out load2'},
    {title: 'lol2', content: 'laughing out load2'},
    {title: 'lol2', content: 'laughing out load2'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
