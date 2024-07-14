import { BaseModel } from "./base.model";


export class Member extends BaseModel {
  memberId: string;
  firstname: string;
  lastname: string;
  email: string;
  city: string;
  state: string;
  zip: string;


  constructor() {
    super();
  }

}

export class RegisterMember extends BaseModel {
  firstname: string;
  lastname: string;
  email: string;
  password: string;

  constructor() {
    super();
  }

}
