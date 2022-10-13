import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellViewComponent } from './shell-view.component';

describe('ShellViewComponent', () => {
  let component: ShellViewComponent;
  let fixture: ComponentFixture<ShellViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShellViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
