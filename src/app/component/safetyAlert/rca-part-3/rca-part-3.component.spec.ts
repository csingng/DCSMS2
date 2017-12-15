import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RcaPart3Component } from './rca-part-3.component';

describe('RcaPart3Component', () => {
  let component: RcaPart3Component;
  let fixture: ComponentFixture<RcaPart3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RcaPart3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RcaPart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
