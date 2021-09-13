import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product/product.model';
import { ProductService } from '../../services/product/product.service';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css']
})
export class ProductItemDetailsComponent implements OnInit {
  product: Product = {
    id: 0,
    name: '',
    price: 0.0,
    url: '',
    description: ''
  };

  formQuantity: number = 1;

  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) {
    this.route.params.subscribe((params) => (this.product = this.productService.getProductById(parseInt(params.id))));
  }

  ngOnInit(): void {}

  addItemToCart(): void {
    this.cartService.addToCart({
      id: this.product.id,
      imageUrl: this.product.url,
      name: this.product.name,
      price: this.product.price,
      quantity: this.formQuantity
    });

    alert('Cart updated');
  }
}
