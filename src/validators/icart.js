import * as Yup from "yup";

export const kioskSchema = Yup.object().shape({
  id: Yup.string().required(),
});

export const conceptSchema = Yup.object().shape({
  name: Yup.string().required(),
  description: Yup.string().optional(),
  rio: Yup.number().required(),
  rioDuration: Yup.string().required(),
});

export const MenuSchema = Yup.object().shape({
  name: Yup.string().required(),
  price: Yup.number().required(),
});

export const ingredientsSchema = Yup.object().shape({
  name: Yup.string().required(),
  unit: Yup.string().required(),
  price: Yup.number().required(),
});

export const machineSchema = Yup.object().shape({
  name: Yup.string().required(),
  description: Yup.string().required(),
  price: Yup.number().required(),
});
