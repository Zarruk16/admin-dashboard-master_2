import client from "../api";
import urls from "../api/urls";

export const getNumber = (n) => (n < 10 ? `0${n}` : n);
export const getImageUrl = (url) =>
  url?.includes("http") || url?.includes("file://")
    ? url
    : client.getUri() + urls.files.baseUrl + url;

export const currencyFormatter = (n, pre = "₦") =>
  (pre || "") + n?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export function objectToFormData(
  obj,
  formData = new FormData(),
  parentKey = null
) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      const fullKey = parentKey ? `${parentKey}[${key}]` : key;

      if (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
      ) {
        objectToFormData(value, formData, fullKey);
      } else if (Array.isArray(value)) {
        value.forEach((item, index) => {
          objectToFormData(item, formData, `${fullKey}[${index}]`);
        });
      } else {
        formData.append(fullKey, value);
      }
    }
  }

  return formData;
}

export const selectFromObject = (fields = [], obj) => {
  const output = {};
  fields.forEach((f) => {
    output[f] = obj[f];
  });
  return output;
};

export const excludeFromObject = (fields = [], obj) => {
  const output = {};
  Object.keys(obj).forEach((f) => {
    if (!fields.includes(f)) {
      output[f] = obj[f];
    }
  });
  return output;
};
