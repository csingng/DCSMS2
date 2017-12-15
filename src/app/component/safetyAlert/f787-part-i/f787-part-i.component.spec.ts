import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F787PartIComponent } from './f787-part-i.component';

describe('F787PartIComponent', () => {
  let component: F787PartIComponent;
  let fixture: ComponentFixture<F787PartIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F787PartIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F787PartIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
