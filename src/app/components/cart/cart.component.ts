import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem, Customer } from '../../models/cart/cart.model';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() cart: CartItem[] = [];
  cartTotal: number = 0.0;

  customer: Customer = {
    name: '',
    address: ''
  };

  //Not using card data but if were actually making payment it would be used
  cardData: string = '';

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    this.cart = this.cartService.getCart();
    this.cartTotal = this.cartService.getCartTotal();
  }

  removeCartItem(id: number): void {
    this.cartService.removeFromCart(id);
    this.getData();
  }

  updateQuantity(value: number, id: number): void {
    this.cartService.updateCart(id, value);
    this.getData();
  }

  submitCustomerData(): void {
    this.cartService.addCustomerData(this.customer);
    this.router.navigate(['confirmation']);
  }
}
