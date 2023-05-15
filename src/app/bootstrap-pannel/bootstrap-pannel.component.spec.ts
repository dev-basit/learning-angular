import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapPannelComponent } from './bootstrap-pannel.component';

describe('BootstrapPannelComponent', () => {
  let component: BootstrapPannelComponent;
  let fixture: ComponentFixture<BootstrapPannelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BootstrapPannelComponent]
    });
    fixture = TestBed.createComponent(BootstrapPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
