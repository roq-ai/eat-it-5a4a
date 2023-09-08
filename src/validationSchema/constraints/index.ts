import * as yup from 'yup';

export const constraintValidationSchema = yup.object().shape({
  max_quantity: yup.number().integer().required(),
  meal_id: yup.string().nullable().required(),
  ingredient_id: yup.string().nullable().required(),
});
