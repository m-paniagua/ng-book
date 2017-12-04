import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormsDemoApp } from './app.component';
import { DemoFormSkuComponent } from './demo-form-sku/demo-form-sku.component';
import { DemoFormSkuBuilderComponent } from './demo-form-sku-builder/demo-form-sku-builder.component';
import { DemoFormWithValidationsExplicitComponent } from './demo-form-with-validations-explicit/demo-form-with-validations-explicit.component';
import { DemoFormWithCustomValidationsComponent } from './demo-form-with-custom-validations/demo-form-with-custom-validations.component';
import { DemoFormWithEventsComponent } from './demo-form-with-events/demo-form-with-events.component';
import { DemoFormNgModelComponent } from './demo-form-ng-model/demo-form-ng-model.component';


@NgModule({
  declarations: [
    FormsDemoApp,
    DemoFormSkuComponent,
    DemoFormSkuBuilderComponent,
    DemoFormWithValidationsExplicitComponent,
    DemoFormWithCustomValidationsComponent,
    DemoFormWithEventsComponent,
    DemoFormNgModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [FormsDemoApp]
})
export class FormsDemoAppModule { }
