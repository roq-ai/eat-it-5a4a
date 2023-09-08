import { UserInterface } from 'interfaces/user';
import { MealInterface } from 'interfaces/meal';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  user_id: string;
  meal_id: string;
  total_price: number;
  status: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  meal?: MealInterface;
  _count?: {};
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  meal_id?: string;
  status?: string;
}
