import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyAlertReport6Component } from './safety-alert-report6.component';

describe('SafetyAlertReport6Component', () => {
  let component: SafetyAlertReport6Component;
  let fixture: ComponentFixture<SafetyAlertReport6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyAlertReport6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyAlertReport6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
