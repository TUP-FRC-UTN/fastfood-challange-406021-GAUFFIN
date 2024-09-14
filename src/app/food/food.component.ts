import { Component } from '@angular/core';
import { FoodListComponent } from '../food-list/food-list.component';
import { FoodDeliveryComponent } from '../food-delivery/food-delivery.component';
import { PosComponent } from '../pos/pos.component';
import { KitchenComponent } from '../kitchen/kitchen.component';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [
    FoodListComponent,
    FoodDeliveryComponent,
    PosComponent,
    KitchenComponent,
  ],
  templateUrl: './food.component.html',
  styleUrl: './food.component.css',
})
export class FoodComponent {}
