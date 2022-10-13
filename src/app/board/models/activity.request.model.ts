import { ActivityType } from './activity.type';

export interface ActivityRequest {
  key?: string;
  type?: ActivityType;
  participants: number;
  price?: number;
  minprice?: number
  maxprice?: number;
  accessibility?: number;
  minaccessibility?: number;
  maxaccessibility?: number;
}
