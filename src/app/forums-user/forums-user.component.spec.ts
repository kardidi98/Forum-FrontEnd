import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumsUserComponent } from './forums-user.component';

describe('ForumsUserComponent', () => {
  let component: ForumsUserComponent;
  let fixture: ComponentFixture<ForumsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumsUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
