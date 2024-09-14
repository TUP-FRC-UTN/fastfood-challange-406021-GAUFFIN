interface FoodItem {
  id: number;
  order: string;
  client: string;
  status: FoodStatusEnum;
}

enum FoodStatusEnum {
  PENDING,
  COOKING,
  READY,
  DELIVERED,
}
