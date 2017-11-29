import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css'],
  inputs: ['product'],
  host: {'class': 'item'}
})
export class ProductRowComponent implements OnInit {
  // input product will be assigned here
  product: Product;

  constructor() { }

  ngOnInit() {
  }

}
