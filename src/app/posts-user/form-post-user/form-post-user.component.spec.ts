import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPostUserComponent } from './form-post-user.component';

describe('FormPostUserComponent', () => {
  let component: FormPostUserComponent;
  let fixture: ComponentFixture<FormPostUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPostUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPostUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
