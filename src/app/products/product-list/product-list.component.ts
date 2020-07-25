import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {

  @Input() brand: {name: string, logo: string} = null;
  @Input() category: { name: string, code: string } = null;

  // The selected product
  product: Product = null;
  @Output() selectedProduct = new EventEmitter<Product>();

  data = [
    new Product('APPLE', 'PHONE', 'iPhone X',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/IPhone_XS_Gold.svg/100px-IPhone_XS_Gold.svg.png',
      '$999,99', 'Black',
      'H: 143.6 mm (5.65 in) W: 70.9 mm (2.79 in) D: 7.7 mm (0.30 in)',
      'Apple A11 Bionic', '256 GB', 'Front camera: 7 MP, Rear camera: 12 MP'),
    new Product('APPLE', 'LAPTOP', 'MacBook Pro',
      'https://www.wiki.tn/38193-large_mobi_default/pc-apple-macbook-pro-133apple77-i5-8go-128g-ssd-gris.jpg',
      '$1400,99', 'Grey',
      '14.09 in (35.79 cm) wide x 9.68 in (24.59 cm) deep x 0.64 in (1.62 cm) high',
      'macOS', '2 TB', '720p FaceTime HD camera'),
      new Product('SAMSUNG', 'PHONE', 'Glaxy S20',
      'https://images.samsung.com/fr/smartphones/galaxy-s20/buy/trade-in/S20_Trade_in_Combo_cut_Cosmic_Gray.png',
      '$909,99', 'Grey',
      '151,7 × 69,1 × 7,9 mm (S20), 161,9 × 73,7 × 7,8 mm (S20+), 166,9 × 76 × 8,8 mm (S20 Ultra)',
      'Android 10', '512 GB', '720p FaceTime HD camera'),
      new Product('NOKIA', 'PHONE', '5310',
      'https://images.ctfassets.net/wcfotm6rrl7u/1qqC24hwO2jwOgCnPtTZBs/e6bd754f21b4d2dd4056719355fc08d3/nokia_5310-nav.png',
      '$85,99', 'White',
      'H: 123.7 mm (4.87 in), W: 52.4 mm (2.06 in), D: 13.1 mm (0.52 in)',
      'Nokia series 30+', '16 MB', 'VGA with LED flash'),
      new Product('XIAOMI', 'LAPTOP', 'Mi Notebook Pro',
      'https://fr.nextbuying.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/0/p000622-01.jpg',
      '$1070,99', 'Grey',
      '360,7 x 243,6 x 16,9 mm',
      'Windows 10 Pro', '1TO SATA SSD', '1.0MP, 720P')
  ];

  products: Array<Product>;
  constructor() { }

  ngOnInit(): void {
    this.products = this.data;
  }

  ngOnChanges(): void {
    this.products = this.data;
    if (this.brand != null) {
      this.products = this.filterByBrand();
    }

    if(this.category != null) {
      this.products = this.filterByCategory();
    }
  }

  private filterByBrand(): Array<Product> {
    let result: Array<Product> = [];
    for (let index = 0; index < this.products.length; index++) {
      if (this.brand.name === this.products[index].brand) {
        result.push(this.products[index]);
      }
    }
    return result;
  }

  private filterByCategory(): Array<Product> {
    let result: Array<Product> = [];
    for (let index = 0; index < this.products.length; index++) {
      if (this.category.code === this.products[index].type) {
        result.push(this.products[index]);
      }
    }
    return result;
  }

  // Set the selected product.
  onSelect(product: Product): void {
    if (this.product != null 
      && product != null
      && product === this.product) {
      this.product = null;
      this.selectedProduct.emit(null);
    } else {
      this.product = product;
      this.selectedProduct.emit(product);
    }
  }

}
