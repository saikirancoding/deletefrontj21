import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsengifdirectiveComponent } from './usengifdirective.component';

describe('UsengifdirectiveComponent', () => {
  let component: UsengifdirectiveComponent;
  let fixture: ComponentFixture<UsengifdirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsengifdirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsengifdirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
