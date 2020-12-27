import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeUserComponent } from './theme-user.component';

describe('ThemeUserComponent', () => {
  let component: ThemeUserComponent;
  let fixture: ComponentFixture<ThemeUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
