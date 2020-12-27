import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesUserComponent } from './themes-user.component';

describe('ThemesUserComponent', () => {
  let component: ThemesUserComponent;
  let fixture: ComponentFixture<ThemesUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemesUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
