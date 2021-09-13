export class CartItem {
  id: number = 0;
  imageUrl: string | undefined;
  name: string | undefined;
  price: number = 0;
  quantity: number = 0;
}

export class Customer {
  name: string | undefined;
  address: string | undefined;
}
