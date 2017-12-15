import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F787PartCComponent } from './f787-part-c.component';

describe('F787PartCComponent', () => {
  let component: F787PartCComponent;
  let fixture: ComponentFixture<F787PartCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F787PartCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F787PartCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
