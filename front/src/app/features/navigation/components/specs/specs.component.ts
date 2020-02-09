import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-specs',
  templateUrl: './specs.component.html',
  styleUrls: ['./specs.component.scss']
})
export class SpecsComponent implements OnInit {
  @Input() title = 'My Channel';
  @Input() summary = '123123';
  @Input() rules = '123dfasdf';
  @Input() followers = 25;
  @Input() authors = 30;
  openInvite = false;
  username: string;

  constructor() { }

  ngOnInit() {
  }

  invite() {
    this.openInvite = !this.openInvite;
  }
}
