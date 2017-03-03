import {User} from './user';
import {Tag} from './tag';
import {Rank} from './rank';

export enum Status{
  "Draft",
  "Pending Approval",
  "Approved",
  "Published",
  "Permanent"
}

export class Document {

  private _status: string;
  private _version: string;
  private _isFile: boolean;
  private _content: string;
  private _tags: Tag[];
  private _owner: User;
  private _users: User[];
  private _ranks: Rank[];

  constructor(status?: Status, version?: string, isFile?: boolean, content?: string, tags?: Tag[], owner?: User, users?: User[], ranks?: Rank[]) {
    this._status = Status[status];
    this._version = version;
    this._isFile = isFile;
    this._content = content;
    this._tags = tags;
    this._owner = owner;
    this._users = users;
    this._ranks = ranks;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get version(): string {
    return this._version;
  }

  set version(value: string) {
    this._version = value;
  }

  get isFile(): boolean {
    return this._isFile;
  }

  set isFile(value: boolean) {
    this._isFile = value;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  get tags(): Tag[] {
    return this._tags;
  }

  set tags(value: Tag[]) {
    this._tags = value;
  }

  get owner(): User {
    return this._owner;
  }

  set owner(value: User) {
    this._owner = value;
  }

  get users(): User[] {
    return this._users;
  }

  set users(value: User[]) {
    this._users = value;
  }

  get ranks(): Rank[] {
    return this._ranks;
  }

  set ranks(value: Rank[]) {
    this._ranks = value;
  }
}
