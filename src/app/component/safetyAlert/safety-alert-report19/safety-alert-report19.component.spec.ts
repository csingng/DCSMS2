import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyAlertReport19Component } from './safety-alert-report19.component';

describe('SafetyAlertReport19Component', () => {
  let component: SafetyAlertReport19Component;
  let fixture: ComponentFixture<SafetyAlertReport19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyAlertReport19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyAlertReport19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
