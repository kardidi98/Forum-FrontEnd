import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListthemecomponentComponent } from './listthemecomponent.component';

describe('ListthemecomponentComponent', () => {
  let component: ListthemecomponentComponent;
  let fixture: ComponentFixture<ListthemecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListthemecomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListthemecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
