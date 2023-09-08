import { ConstraintInterface } from 'interfaces/constraint';
import { IngredientInterface } from 'interfaces/ingredient';
import { OrderInterface } from 'interfaces/order';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface MealInterface {
  id?: string;
  name: string;
  description?: string;
  price: number;
  restaurant_id: string;
  created_at?: any;
  updated_at?: any;
  constraint?: ConstraintInterface[];
  ingredient?: IngredientInterface[];
  order?: OrderInterface[];
  restaurant?: RestaurantInterface;
  _count?: {
    constraint?: number;
    ingredient?: number;
    order?: number;
  };
}

export interface MealGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  restaurant_id?: string;
}
