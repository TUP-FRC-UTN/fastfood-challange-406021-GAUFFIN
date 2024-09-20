import { Component, inject } from '@angular/core';
import { FoodItem, FoodStatusEnum } from '../models/foodItem';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-food-delivery',
  standalone: true,
  imports: [],
  templateUrl: './food-delivery.component.html',
  styleUrl: './food-delivery.component.css',
})
export class FoodDeliveryComponent {
  status = FoodStatusEnum.READY;
  private foodService = inject(FoodService);
  orders: FoodItem[] = [];
  ngOnInit() {
    this.refreshOrders();
  }

  refreshOrders() {
    this.orders = this.foodService.getAllOrders();
  }

  deliverItem(id: number) {
    this.foodService.changeState(id, FoodStatusEnum.DELIVERED);
  }
}
