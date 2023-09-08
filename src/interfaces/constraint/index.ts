import { MealInterface } from 'interfaces/meal';
import { IngredientInterface } from 'interfaces/ingredient';
import { GetQueryInterface } from 'interfaces';

export interface ConstraintInterface {
  id?: string;
  meal_id: string;
  ingredient_id: string;
  max_quantity: number;
  created_at?: any;
  updated_at?: any;

  meal?: MealInterface;
  ingredient?: IngredientInterface;
  _count?: {};
}

export interface ConstraintGetQueryInterface extends GetQueryInterface {
  id?: string;
  meal_id?: string;
  ingredient_id?: string;
}
