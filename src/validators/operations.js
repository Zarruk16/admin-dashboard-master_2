import * as Yup from "yup";

export const locationSchema = Yup.object().shape({
  label: Yup.string().required(),
  city: Yup.string().required(),
  latitude: Yup.number().required(),
  longitude: Yup.number().required(),
});

export const citySchema = Yup.object().shape({
  name: Yup.string().required(),
  country: Yup.string().required(),
});
