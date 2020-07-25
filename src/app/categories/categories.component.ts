import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories = [
    {
      name: "Phones",
      code: "PHONE"
    },
    {
      name: "Laptops",
      code: "LAPTOP"
    }
  ]

  // The selcted category
  category: { name: string, code: string } = null;
  @Output() selectedCategory = new EventEmitter<{ name: string, code: string }>();

  constructor() { }

  ngOnInit(): void {
    this.selectedCategory.emit(null);
  }

  // Set the selected category.
  onSelect(category: { name: string, code: string }) {
    if (this.category != null 
      && category != null
      && category.code === this.category.code) {
      this.category = null;
      this.selectedCategory.emit(null);
    } else {
      this.category = category;
      this.selectedCategory.emit(category);
    }
  }

}
