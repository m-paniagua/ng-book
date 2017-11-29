import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { EventEmitter } from '@angular/core';
import { InventoryAppComponent } from '../app.component';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  inputs: ['productList'],
  outputs: ['onProductSelected']
})
export class ProductsListComponent implements OnInit {
  // the products array passed from InventoryAppComponent
  productList: Product[];

  // outputs selected product
  onProductSelected: EventEmitter<Product>;

  // currently selected product
  private currentProduct: Product;

  constructor() { 
    this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product):void {
    this.currentProduct = product;
    // emit product that was clicked
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }

    return product.sku === this.currentProduct.sku;
  }

  ngOnInit() {
  }

}
