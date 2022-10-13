import { TestBed } from '@angular/core/testing';

import { ActivityEffect } from './activity.effect';

describe('Activity.EffectService', () => {
  let service: ActivityEffect;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityEffect);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
