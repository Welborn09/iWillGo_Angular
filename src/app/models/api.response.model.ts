import { Member } from "./member.model";


export class ApiResponse {
  succeeded: boolean;
  statusCode: string;
  responseObj: any;
  statusMessage: any;
  validationMessages: [];
}

export class AuthenticatedResponse {
  member: Member;
  token: string;
  userFound: boolean;
  succeeded: boolean
  statusMessage: any;
}
