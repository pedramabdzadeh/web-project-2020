import {Comment} from './comment';

export class Post {
  // tslint:disable-next-line:variable-name
  private _id: number;
  // tslint:disable-next-line:variable-name
  private _title: string;
  // tslint:disable-next-line:variable-name
  private _channelLink: string;
  // tslint:disable-next-line:variable-name
  private _comments: Comment[];
  // tslint:disable-next-line:variable-name
  private _score: number;
  // tslint:disable-next-line:variable-name
  private _content: any;


  constructor(id: number, title: string, channelLink: string, comments: Comment[], score: number, content: any) {
    this._id = id;
    this._title = title;
    this._channelLink = channelLink;
    this._comments = comments;
    this._score = score;
    this._content = content;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get channelLink(): string {
    return this._channelLink;
  }

  set channelLink(value: string) {
    this._channelLink = value;
  }

  get comments(): Comment[] {
    return this._comments;
  }

  set comments(value: Comment[]) {
    this._comments = value;
  }

  get score(): number {
    return this._score;
  }

  set score(value: number) {
    this._score = value;
  }

  get content(): any {
    return this._content;
  }

  set content(value: any) {
    this._content = value;
  }
}
