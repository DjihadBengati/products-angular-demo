import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnChanges {

  @Input() product: Product = null;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
  }

}
