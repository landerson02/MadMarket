import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public signingIn: boolean = true;

  signinForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@wisc\.edu$')]]
  });

  signupForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@wisc\.edu$')]]
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    // Initialize the form with validators
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@wisc\.edu$')]]
    });
  }

  onSubmit() {
    console.log('data submitted:', this.signingIn ?
      {email: this.signinForm.value.email} :
      {
        name: this.signupForm.value.name,
        phone: this.signupForm.value.phone,
        email: this.signupForm.value.email,
      });
  }
}
