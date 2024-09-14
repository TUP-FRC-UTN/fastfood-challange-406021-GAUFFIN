import { Injectable } from '@angular/core';
import { INITIAL_ORDERS } from '../data/initialData';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  private orders: FoodItem[] = INITIAL_ORDERS;

  getAllOrders(): FoodItem[] {
    return this.orders;
  }

  getOrderByStatus(status: FoodStatusEnum) {
    return this.orders.filter((item) => item.status === status);
  }

  newOrder(item: FoodItem) {
    item.status = FoodStatusEnum.PENDING;
    this.orders.push(item);
  }
}
