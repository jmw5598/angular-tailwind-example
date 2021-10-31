import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FramingNavbarComponent } from './framing-navbar.component';

describe('FramingNavbarComponent', () => {
  let component: FramingNavbarComponent;
  let fixture: ComponentFixture<FramingNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FramingNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FramingNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
