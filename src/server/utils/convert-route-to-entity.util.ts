const mapping: Record<string, string> = {
  constraints: 'constraint',
  ingredients: 'ingredient',
  meals: 'meal',
  orders: 'order',
  restaurants: 'restaurant',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
