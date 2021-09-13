import { Injectable } from '@angular/core';
import * as data from '../../../assets/data.json';
import { Product } from '../../models/product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList: Product[] = (data as any).default;

  constructor() {}

  getProductList(): Product[] {
    return this.productList;
  }

  getProductById(id: number): Product {
    return <Product>this.productList.find((product) => product.id === id);
  }
}
