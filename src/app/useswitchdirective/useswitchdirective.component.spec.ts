import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseswitchdirectiveComponent } from './useswitchdirective.component';

describe('UseswitchdirectiveComponent', () => {
  let component: UseswitchdirectiveComponent;
  let fixture: ComponentFixture<UseswitchdirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseswitchdirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseswitchdirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
