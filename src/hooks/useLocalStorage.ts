import { useEffect, useState } from "react";
export const useLocalStorage = (key: string, intialValue = "") => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : intialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const storeValue = (val: string) => {
    setValue(JSON.stringify(val) ?? "");
  };

  return [value, storeValue];
};
