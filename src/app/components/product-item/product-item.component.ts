import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product/product.model';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = {
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: ''
  };

  formQuantity: number = 1;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addItemToCart(): void {
    this.cartService.addToCart({
      id: this.product.id,
      imageUrl: this.product.url,
      name: this.product.name,
      price: this.product.price,
      quantity: this.formQuantity
    });

    alert('Added to cart!');
  }
}
