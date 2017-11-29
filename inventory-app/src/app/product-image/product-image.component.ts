import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css'],
  inputs: ['product'],
  host: {'class': 'ui small image'}
})
export class ProductImageComponent implements OnInit {
  product: Product;

  constructor() { }

  ngOnInit() {
  }

}
