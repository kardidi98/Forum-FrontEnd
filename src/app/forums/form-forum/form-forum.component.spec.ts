import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormForumComponent } from './form-forum.component';

describe('FormForumComponent', () => {
  let component: FormForumComponent;
  let fixture: ComponentFixture<FormForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormForumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
