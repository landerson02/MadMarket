import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorylistingsComponent } from './categorylistings.component';

describe('CategorylistingsComponent', () => {
  let component: CategorylistingsComponent;
  let fixture: ComponentFixture<CategorylistingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorylistingsComponent]
    });
    fixture = TestBed.createComponent(CategorylistingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
