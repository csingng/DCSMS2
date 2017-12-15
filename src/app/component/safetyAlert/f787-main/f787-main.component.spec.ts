import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F787MainComponent } from './f787-main.component';

describe('F787MainComponent', () => {
  let component: F787MainComponent;
  let fixture: ComponentFixture<F787MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F787MainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F787MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
