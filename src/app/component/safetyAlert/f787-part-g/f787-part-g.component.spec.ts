import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F787PartGComponent } from './f787-part-g.component';

describe('F787PartGComponent', () => {
  let component: F787PartGComponent;
  let fixture: ComponentFixture<F787PartGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F787PartGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F787PartGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
