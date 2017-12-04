import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  FormControl
} from '@angular/forms';

function skuValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return {invalidSku: true};
  }
}

@Component({
  selector: 'demo-form-with-custom-validations',
  templateUrl: './demo-form-with-custom-validations.component.html',
  styleUrls: ['./demo-form-with-custom-validations.component.css']
})
export class DemoFormWithCustomValidationsComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku':  ['', Validators.compose([
        Validators.required, skuValidator])]
    });

    this.sku = this.myForm.controls['sku'];
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
    alert('you submitted value: ' + JSON.stringify(value));
  }

  ngOnInit() {
  }

}
