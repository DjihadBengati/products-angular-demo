import { Component, Input, OnChanges } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  title = 'app';

  // The selected brand
  selectedBrand: {name: string, logo: string} = null;

  // The selected category
  selectedCategory: { name: string, code: string } = null;

  // The selected product
  selectedProduct: Product = null;

  ngOnChanges() {
  }

  onSelectCategory(category: {name: string, code: string}): void {
    if (this.selectedCategory != null 
      && category != null
      && this.selectedCategory.code === category.code) {
      this.selectedCategory = null;
    }
    else {
      this.selectedCategory = category;
    }
  }

  onSelectBrand(brand: { name: string, logo: string }): void {
    if (this.selectedBrand != null 
      && brand != null
      && this.selectedBrand.name === brand.name) {
      this.selectedBrand = null;
    }
    else {
      this.selectedBrand = brand;
    }
  }

  onSelectProduct(product: Product): void {
    if (this.selectedProduct != null 
      && product != null
      && this.selectedProduct === product) {
      this.selectedProduct = null;
    }
    else {
      this.selectedProduct = product;
    }
  }
}
