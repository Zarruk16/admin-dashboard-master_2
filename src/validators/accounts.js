import * as Yup from "yup";

export const userSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  password2: Yup.string().required(),
  phoneNumber: Yup.string().required(),
  nin: Yup.string().required(),
  country: Yup.string().required(),
  city: Yup.string().required(),
  zip: Yup.string().required(),
  street: Yup.string().required(),
  state: Yup.string().required(),
});

export const userProfileSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  phoneNumber: Yup.string().required(),
  nin: Yup.string().required(),
  country: Yup.string().required(),
  city: Yup.string().required(),
  zip: Yup.string().required(),
  street: Yup.string().required(),
  state: Yup.string().required(),
});

export const adminSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  password2: Yup.string().required(),
  phoneNumber: Yup.string().required(),
});

export const adminProfileSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  phoneNumber: Yup.string().required(),
});

export const operatorSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  password2: Yup.string().required(),
});

export const departmentSchema = Yup.object().shape({
  name: Yup.string().required(),
});
