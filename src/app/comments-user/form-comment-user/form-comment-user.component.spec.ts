import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCommentUserComponent } from './form-comment-user.component';

describe('FormCommentUserComponent', () => {
  let component: FormCommentUserComponent;
  let fixture: ComponentFixture<FormCommentUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCommentUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCommentUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
