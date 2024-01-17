import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useInput = (initialValue = "", name) => {
  const [value, setValue] = useLocalStorage(`form-input:${name}`, initialValue);

  const changeHandler = (e) => {
    const { value, type, checked } = e.target;
    setValue(type === "checkbox" ? checked : value);
  };

  return [value, changeHandler];
};
