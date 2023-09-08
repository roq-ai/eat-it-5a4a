import axios from 'axios';
import queryString from 'query-string';
import { ConstraintInterface, ConstraintGetQueryInterface } from 'interfaces/constraint';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getConstraints = async (
  query?: ConstraintGetQueryInterface,
): Promise<PaginatedInterface<ConstraintInterface>> => {
  const response = await axios.get('/api/constraints', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createConstraint = async (constraint: ConstraintInterface) => {
  const response = await axios.post('/api/constraints', constraint);
  return response.data;
};

export const updateConstraintById = async (id: string, constraint: ConstraintInterface) => {
  const response = await axios.put(`/api/constraints/${id}`, constraint);
  return response.data;
};

export const getConstraintById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/constraints/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteConstraintById = async (id: string) => {
  const response = await axios.delete(`/api/constraints/${id}`);
  return response.data;
};
