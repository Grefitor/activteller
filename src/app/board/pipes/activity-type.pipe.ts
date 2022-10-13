import { Pipe, PipeTransform } from '@angular/core';
import { Activity, ActivityError } from '../models/activity.response.model';

@Pipe({
  name: 'activityType'
})
export class ActivityTypePipe implements PipeTransform {

  transform(value: Activity | ActivityError | null):'ACTIVITY' | 'ERROR' | 'NOT_AVAILABLE' {
    
    if (value instanceof Activity) {
      return 'ACTIVITY';
    }

    if (value instanceof ActivityError) {
      return 'ERROR'
    }

    return 'NOT_AVAILABLE'

  }

}
