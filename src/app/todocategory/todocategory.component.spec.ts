import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodocategoryComponent } from './todocategory.component';

describe('TodocategoryComponent', () => {
  let component: TodocategoryComponent;
  let fixture: ComponentFixture<TodocategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodocategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodocategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
