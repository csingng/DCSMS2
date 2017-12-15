import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyAlertReport12Component } from './safety-alert-report12.component';

describe('SafetyAlertReport12Component', () => {
  let component: SafetyAlertReport12Component;
  let fixture: ComponentFixture<SafetyAlertReport12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyAlertReport12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyAlertReport12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
