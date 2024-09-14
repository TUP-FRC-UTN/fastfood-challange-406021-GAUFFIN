export const INITIAL_ORDERS: FoodItem[] = [
  {
    id: 1,
    client: 'Juan Perez',
    order: '3 Panchos',
    status: FoodStatusEnum.PENDING,
  },
  {
    id: 2,
    client: 'Juan Vergalarga',
    order: '1 pizza',
    status: FoodStatusEnum.COOKING,
  },
  {
    id: 3,
    client: 'Juancho',
    order: '3 empanadas',
    status: FoodStatusEnum.READY,
  },
  {
    id: 4,
    client: 'Juanito',
    order: 'Juquitop',
    status: FoodStatusEnum.DELIVERED,
  },
];
