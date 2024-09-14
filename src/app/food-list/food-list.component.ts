import { Component, inject } from '@angular/core';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.css',
})
export class FoodListComponent {
  private foodService = inject(FoodService);
  pendingOrders: FoodItem[] = [];
  ngOnInit() {
    this.refreshOrders();
  }

  refreshOrders() {
    this.pendingOrders = this.foodService.getOrderByStatus(
      FoodStatusEnum.PENDING
    );
  }
}
