import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsengclasscComponent } from './usengclassc.component';

describe('UsengclasscComponent', () => {
  let component: UsengclasscComponent;
  let fixture: ComponentFixture<UsengclasscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsengclasscComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsengclasscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
