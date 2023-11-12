import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../../objects/category";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {notEqual, notEqualValidator} from './not-equal.validator';


@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  @Input() categories?: Category[];

  public init: boolean = false;

  sellForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    contact: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@wisc\.edu$')]],
    price: ['', [Validators.required, Validators.pattern('/^\d+(\.\d{1,2})?$/')]],
    category: ['select', notEqual],
    imageUpload: [null],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.sellForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      contact: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@wisc\.edu$')]],
      price: ['', Validators.required],
      category: ['select', notEqual],
      imageUpload: [null],
    });
    this.init = true;
  }

  onSubmit(): void {
    // Handle form submission here
    if(this.sellForm) {
      console.log(this.sellForm.value);
    }
  }
}
