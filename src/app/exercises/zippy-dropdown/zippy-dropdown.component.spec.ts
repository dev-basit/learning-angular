import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZippyDropdownComponent } from './zippy-dropdown.component';

describe('ZippyDropdownComponent', () => {
  let component: ZippyDropdownComponent;
  let fixture: ComponentFixture<ZippyDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZippyDropdownComponent]
    });
    fixture = TestBed.createComponent(ZippyDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
