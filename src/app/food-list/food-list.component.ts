import { Component, inject } from '@angular/core';
import { FoodService } from '../services/food.service';
import { FoodItem, FoodStatusEnum } from '../models/foodItem';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.css',
})
export class FoodListComponent {
  state = FoodStatusEnum.PENDING;
  private foodService = inject(FoodService);
  pendingOrders: FoodItem[] = [];
  ngOnInit() {
    this.refreshOrders();
  }

  refreshOrders() {
    this.pendingOrders = this.foodService.getAllOrders();
  }
}
