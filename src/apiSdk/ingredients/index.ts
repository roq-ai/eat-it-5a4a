import axios from 'axios';
import queryString from 'query-string';
import { IngredientInterface, IngredientGetQueryInterface } from 'interfaces/ingredient';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getIngredients = async (
  query?: IngredientGetQueryInterface,
): Promise<PaginatedInterface<IngredientInterface>> => {
  const response = await axios.get('/api/ingredients', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createIngredient = async (ingredient: IngredientInterface) => {
  const response = await axios.post('/api/ingredients', ingredient);
  return response.data;
};

export const updateIngredientById = async (id: string, ingredient: IngredientInterface) => {
  const response = await axios.put(`/api/ingredients/${id}`, ingredient);
  return response.data;
};

export const getIngredientById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/ingredients/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteIngredientById = async (id: string) => {
  const response = await axios.delete(`/api/ingredients/${id}`);
  return response.data;
};
