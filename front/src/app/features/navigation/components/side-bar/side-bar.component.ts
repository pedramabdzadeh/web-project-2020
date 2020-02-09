import {Component, Input, OnInit} from '@angular/core';
import {Channel} from '../../../../models/channel';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  @Input() sidebarClass = 'aside';
  channels: Channel[] = [
    {id: 1, title: 'Hi', authors: [], link: '/channels/1/posts', follwers: 1000},
    {id: 1, title: 'Hi', authors: [], link: '/channels/1/posts'},
    {id: 1, title: 'Hi', authors: [], link: '/channels/1/posts'},
    {id: 1, title: 'Hi', authors: [], link: '/channels/1/posts'},
    {id: 1, title: 'Hi', authors: [], link: '/channels/1/posts'},
    {id: 1, title: 'Hi', authors: [], link: '/channels/1/posts'},
    {id: 1, title: 'Hi', authors: [], link: '/channels/1/posts'},
    {id: 1, title: 'Hi', authors: [], link: '/channels/1/posts'},
    {id: 1, title: 'Hi', authors: [], link: '/channels/1/posts'},
    {id: 1, title: 'Hi', authors: [], link: '/channels/1/posts'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
