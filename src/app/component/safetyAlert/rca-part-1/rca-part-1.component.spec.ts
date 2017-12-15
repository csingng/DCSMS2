import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RcaPart1Component } from './rca-part-1.component';

describe('RcaPart1Component', () => {
  let component: RcaPart1Component;
  let fixture: ComponentFixture<RcaPart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RcaPart1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RcaPart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
