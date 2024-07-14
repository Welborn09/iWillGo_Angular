import { BaseModel } from "./base.model";


export class Opportunity extends BaseModel {
  eventId: string;
  eventName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  eventDate: string;
  eventTimeFrom: string;
  eventTimeTo: string;
  description: string;
  hostId: string;
  active: boolean;
  memberCount: string;

  constructor() {
    super();
  }
}
