export class Comment {
  private _id: number;
  private _content: string;
  private _score: number;
  private _postID: number;
  private _comments: Comment[];


  constructor(id: number, content: string, score: number, postID: number, comments: Comment[]) {
    this._id = id;
    this._content = content;
    this._score = score;
    this._postID = postID;
    this._comments = comments;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  get score(): number {
    return this._score;
  }

  set score(value: number) {
    this._score = value;
  }

  get postID(): number {
    return this._postID;
  }

  set postID(value: number) {
    this._postID = value;
  }

  get comments(): Comment[] {
    return this._comments;
  }

  set comments(value: Comment[]) {
    this._comments = value;
  }
}
