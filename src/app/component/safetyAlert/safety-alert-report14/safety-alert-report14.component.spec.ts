import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyAlertReport14Component } from './safety-alert-report14.component';

describe('SafetyAlertReport14Component', () => {
  let component: SafetyAlertReport14Component;
  let fixture: ComponentFixture<SafetyAlertReport14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyAlertReport14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyAlertReport14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
