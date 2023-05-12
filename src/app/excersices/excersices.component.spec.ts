import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcersicesComponent } from './excersices.component';

describe('ExcersicesComponent', () => {
  let component: ExcersicesComponent;
  let fixture: ComponentFixture<ExcersicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcersicesComponent]
    });
    fixture = TestBed.createComponent(ExcersicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
