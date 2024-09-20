import { Component, inject } from '@angular/core';
import { FoodService } from '../services/food.service';
import { FoodItem, FoodStatusEnum } from '../models/foodItem';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css',
})
export class PosComponent {
  private foodService = inject(FoodService);
  newOrder: FoodItem = {
    id: 0,
    client: '',
    order: '',
    status: FoodStatusEnum.PENDING,
  };

  sendForm(form: NgForm) {
    if (form.valid) {
      this.foodService.newOrder(this.newOrder);
      this.newOrder.client = '';
      this.newOrder.order = '';
    }
  }
}
