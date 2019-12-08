import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpInputComponent } from './sign-up-input.component';

describe('SignUpInputComponent', () => {
  let component: SignUpInputComponent;
  let fixture: ComponentFixture<SignUpInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
