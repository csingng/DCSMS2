import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F787PartHComponent } from './f787-part-h.component';

describe('F787PartHComponent', () => {
  let component: F787PartHComponent;
  let fixture: ComponentFixture<F787PartHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F787PartHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F787PartHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
