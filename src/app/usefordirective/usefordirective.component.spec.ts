import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsefordirectiveComponent } from './usefordirective.component';

describe('UsefordirectiveComponent', () => {
  let component: UsefordirectiveComponent;
  let fixture: ComponentFixture<UsefordirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsefordirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsefordirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
