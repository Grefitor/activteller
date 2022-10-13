import { ActivityType } from './activity.type';

export class Activity {
  activity?: string;
  accessibility?: number;
  type?: ActivityType;
  participants?: number;
  price?: number;
  link?: string;
  key?: string;

  constructor(data: {
    activity?: string,
    accessibility?: number,
    type?: ActivityType,
    participants?: number,
    price?: number,
    link?: string,
    key?: string}
  ) {
    this.activity = data.activity;
    this.accessibility = data.accessibility;
    this.type = data.type;
    this.participants = data.participants;
    this.price = data.price;
    this.link = data.link;
    this.key = data.key;
  }
}

export class ActivityError {
  error?: string;
  activity?: string
  constructor(data: { error?: string}) {
    this.error = data.error
    this.activity = ''
  }
}
