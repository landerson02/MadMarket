import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglesignoutComponent } from './googlesignout.component';

describe('GooglesignoutComponent', () => {
  let component: GooglesignoutComponent;
  let fixture: ComponentFixture<GooglesignoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GooglesignoutComponent]
    });
    fixture = TestBed.createComponent(GooglesignoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
