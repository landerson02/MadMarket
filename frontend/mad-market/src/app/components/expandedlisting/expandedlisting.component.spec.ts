import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandedlistingComponent } from './expandedlisting.component';

describe('ExpandedlistingComponent', () => {
  let component: ExpandedlistingComponent;
  let fixture: ComponentFixture<ExpandedlistingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpandedlistingComponent]
    });
    fixture = TestBed.createComponent(ExpandedlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
