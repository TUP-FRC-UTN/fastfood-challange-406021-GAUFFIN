export interface FoodItem {
  id: number;
  order: string;
  client: string;
  status: FoodStatusEnum;
}

export enum FoodStatusEnum {
  PENDING,
  COOKING,
  READY,
  DELIVERED,
}
