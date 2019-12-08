import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInputComponent } from './login-input.component';

describe('LoginInputComponent', () => {
  let component: LoginInputComponent;
  let fixture: ComponentFixture<LoginInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
