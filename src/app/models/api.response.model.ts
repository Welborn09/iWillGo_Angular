

export class ApiResponse {
  succeeded: boolean;
  statusCode: string;
  responseObj: any;
  statusMessage: any;
  validationMessages: [];
}

export class BackgroundProcessResponse {
  key: string;
  data: any;
  status: string;
}
