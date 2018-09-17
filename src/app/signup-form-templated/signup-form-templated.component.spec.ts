import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFormTemplatedComponent } from './signup-form-templated.component';

describe('SignupFormTemplatedComponent', () => {
  let component: SignupFormTemplatedComponent;
  let fixture: ComponentFixture<SignupFormTemplatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupFormTemplatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFormTemplatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
