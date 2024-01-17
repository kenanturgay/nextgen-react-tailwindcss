import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  
  const [value, setValue] = useState(() => {
    const localValue = localStorage.getItem(key);
    if (localValue) {
      return JSON.parse(localValue);
    } else {
      return initialValue;
    }
  });

  const changeValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, changeValue];
};
