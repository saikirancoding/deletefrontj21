import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsecustomdirectiveComponent } from './usecustomdirective.component';

describe('UsecustomdirectiveComponent', () => {
  let component: UsecustomdirectiveComponent;
  let fixture: ComponentFixture<UsecustomdirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsecustomdirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsecustomdirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
