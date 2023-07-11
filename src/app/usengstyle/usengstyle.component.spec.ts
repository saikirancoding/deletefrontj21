import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsengstyleComponent } from './usengstyle.component';

describe('UsengstyleComponent', () => {
  let component: UsengstyleComponent;
  let fixture: ComponentFixture<UsengstyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsengstyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsengstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
