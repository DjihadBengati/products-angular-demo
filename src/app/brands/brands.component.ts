import { Component, Output, EventEmitter, OnInit } from "@angular/core";

@Component({
    selector: 'app-brands',
    templateUrl: './brands.component.html',
    styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

    // List of brands.
    brands = [
        {
            name: 'NOKIA',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Nokia_wordmark.svg/langfr-1920px-Nokia_wordmark.svg.png'
        },
        {
            name: 'SAMSUNG',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Samsung_wordmark.svg/langfr-1920px-Samsung_wordmark.svg.png'
        },
        {
            name: 'APPLE',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/langfr-800px-Apple_logo_black.svg.png'
        },
        {
            name: 'XIAOMI',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/langfr-1024px-Xiaomi_logo.svg.png'
        }
    ]

    // Selected brand.
    // The type definition of a Brand 
    // {name: as string value, logo: as a string value too}.
    brand: {name: string, logo: string} = null;
    @Output() selectedBrand = new EventEmitter<{name: string, logo: string}>();
    
    // Set the selected brand.
    onSelect(brand: {name: string, logo: string}) {
        if (this.brand != null 
            && brand != null
            && brand.name === this.brand.name) {
            this.brand = null;
            this.selectedBrand.emit(null);
        } else {
            this.brand = brand;
            this.selectedBrand.emit(brand);
        }
    }

    ngOnInit(): void {
        this.selectedBrand.emit(null);
    }

}