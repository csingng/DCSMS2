import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyAlertAdminContractsEditComponent } from './safety-alert-admin-contracts-edit.component';

describe('SafetyAlertAdminContractsEditComponent', () => {
  let component: SafetyAlertAdminContractsEditComponent;
  let fixture: ComponentFixture<SafetyAlertAdminContractsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyAlertAdminContractsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyAlertAdminContractsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
