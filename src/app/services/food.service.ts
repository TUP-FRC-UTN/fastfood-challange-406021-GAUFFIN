import { Injectable } from '@angular/core';
import { INITIAL_ORDERS } from '../data/initialData';
import { FoodItem, FoodStatusEnum } from '../models/foodItem';

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
    return this.orders.filter((item) => item.status == status);
  }

  newOrder(item: FoodItem) {
    item.id = this.getLatestIndex();
    item.status = FoodStatusEnum.PENDING;
    this.orders.push({ ...item });
    console.log(this.orders);
  }
  getLatestIndex() {
    var max: number = this.orders[0].id;

    this.orders.forEach((item) => {
      if (item.id > max) {
        max = item.id;
      }
    });
    max++;
    return max;
  }

  changeState(id: number, status: FoodStatusEnum) {
    this.orders.forEach((order) => {
      if (order.id === id) {
        order.status = status;
      }
    });
  }
}
