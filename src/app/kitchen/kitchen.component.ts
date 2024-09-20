import { Component, inject } from '@angular/core';
import { FoodItem, FoodStatusEnum } from '../models/foodItem';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css',
})
export class KitchenComponent {
  status = FoodStatusEnum.PENDING;
  private foodService = inject(FoodService);
  cookingOrder?: FoodItem = undefined;
  orders: FoodItem[] = [];
  ngOnInit() {
    this.refreshOrders();
  }

  refreshOrders() {
    this.orders = this.foodService.getAllOrders();
    this.cookingOrder = this.foodService.getOrderByStatus(
      FoodStatusEnum.COOKING
    )[0];
  }

  cookItem(id: number) {
    this.foodService.changeState(id, FoodStatusEnum.COOKING);
    this.refreshOrders();
  }

  finishCooking() {
    if (this.cookingOrder) {
      this.foodService.changeState(this.cookingOrder?.id, FoodStatusEnum.READY);
      this.refreshOrders();
    }
  }
}
