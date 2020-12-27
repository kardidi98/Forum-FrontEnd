import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumUserComponent } from './forum-user.component';

describe('ForumUserComponent', () => {
  let component: ForumUserComponent;
  let fixture: ComponentFixture<ForumUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
