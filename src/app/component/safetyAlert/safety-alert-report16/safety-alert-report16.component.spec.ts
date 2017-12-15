import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyAlertReport16Component } from './safety-alert-report16.component';

describe('SafetyAlertReport16Component', () => {
  let component: SafetyAlertReport16Component;
  let fixture: ComponentFixture<SafetyAlertReport16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyAlertReport16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyAlertReport16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
