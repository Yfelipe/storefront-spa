import { Injectable } from '@angular/core';
import { CartItem, Customer } from '../../models/cart/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: CartItem[] = [];
  customerData: Customer = {
    name: '',
    address: ''
  };

  constructor() {}

  addToCart(item: CartItem): void {
    this.cart.push(item);
  }

  updateCart(productId: number, quantity: number): void {
    const productIndex = this.cart.findIndex((item) => item.id == productId);
    this.cart[productIndex].quantity = quantity;
  }

  removeFromCart(id: number): void {
    this.cart = this.cart.filter((cartItem) => cartItem.id !== id);
  }

  getCart(): CartItem[] {
    return this.cart;
  }

  getCartTotal(): number {
    let cartTotal = 0;

    for (const item of this.cart) {
      cartTotal += item.price * item.quantity;
    }

    return parseFloat(cartTotal.toFixed(2));
  }

  addCustomerData(customer: Customer): void {
    this.customerData = customer;
  }

  getCustomerData(): Customer {
    return this.customerData;
  }

  clearData(): void {
    this.cart = [];
    this.customerData = {
      name: '',
      address: ''
    };
  }
}
