import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public signingIn: boolean = true;
  public init: boolean = false;
  @Output() public signup = new EventEmitter<string>();
  @Output() public signin = new EventEmitter<string>();
  @Input() public signInError: number = 0;
  @Input() public signUpError: number = 0;

  signinForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@wisc\.edu$')]]
  });

  signupForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@wisc\.edu$')]]
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    // Initialize the form with validators
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@wisc\.edu$')]]
    });
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@wisc\.edu$')]]
    });
    this.init = true;
  }

  onSubmit() {
    if (!this.signingIn) {
      let s = this.signupForm.value.name + ",," + this.signupForm.value.email + ",," + this.signupForm.value.phone;
      this.signup.emit(s);
    }
    else {
      let s = this.signinForm.value.email;
      this.signin.emit(s);
    }
  }
}
