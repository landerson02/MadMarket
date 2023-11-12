import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from "../../objects/category";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {notEqual} from './not-equal.validator';
import {User} from "../../objects/user";


@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  @Input() categories?: Category[];
  @Input() user?: User;
  @Output() public sell = new EventEmitter<string>();

  public init: boolean = false;
  public success: boolean = false;

  sellForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', [Validators.required, Validators.pattern('/^\d+(\.\d{1,2})?$/')]],
    category: ['select', notEqual],
    imageUpload: [null],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.sellForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required]],
      category: ['select', notEqual],
      imageUpload: [null],
    });
    this.init = true;
    this.success = false;
  }

  onSubmit(): void {
    // Handle form submission here
    if(this.sellForm && this.user) {
      this.success = true;
      const s = "-1,," + this.user.userId + ",," + this.sellForm.value.category + ",," + this.sellForm.value.name + ",," +
        this.sellForm.value.description + ",," + this.sellForm.value.price;
      this.sell.emit(s);
    }
    console.log(this.sellForm.value.imageUpload);
  }
}
