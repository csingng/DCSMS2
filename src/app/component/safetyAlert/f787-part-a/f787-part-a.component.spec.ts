import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F787PartAComponent } from './f787-part-a.component';

describe('F787PartAComponent', () => {
  let component: F787PartAComponent;
  let fixture: ComponentFixture<F787PartAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F787PartAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F787PartAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
