import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  name: string | undefined;
  total: number = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.name = this.cartService.getCustomerData().name;
    this.total = this.cartService.getCartTotal();

    if (!this.name) {
      this.router.navigate(['']);
    }
  }

  clearCartData(): void {
    this.cartService.clearData();
    this.router.navigate(['']);
  }
}
