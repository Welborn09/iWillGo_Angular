import {Member} from './member.model';

export class BaseModel {
  id: string;
  createdDate: Date;
  modifiedDate: Date;
  createdBy: Member;
  modifiedBy: Member;

  constructor() { }
}
