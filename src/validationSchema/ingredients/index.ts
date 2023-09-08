import * as yup from 'yup';

export const ingredientValidationSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().integer().required(),
  meal_id: yup.string().nullable().required(),
});
