import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F787PartEComponent } from './f787-part-e.component';

describe('F787PartEComponent', () => {
  let component: F787PartEComponent;
  let fixture: ComponentFixture<F787PartEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F787PartEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F787PartEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
