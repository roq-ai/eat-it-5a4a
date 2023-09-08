import { ConstraintInterface } from 'interfaces/constraint';
import { MealInterface } from 'interfaces/meal';
import { GetQueryInterface } from 'interfaces';

export interface IngredientInterface {
  id?: string;
  name: string;
  price: number;
  meal_id: string;
  created_at?: any;
  updated_at?: any;
  constraint?: ConstraintInterface[];
  meal?: MealInterface;
  _count?: {
    constraint?: number;
  };
}

export interface IngredientGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  meal_id?: string;
}
