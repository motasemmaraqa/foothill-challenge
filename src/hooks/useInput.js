import { useState } from 'react';
const useInput = (initialVal) => {
  const [value, setValue] = useState(initialVal);
  const isValid = value.length > 0;
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return [value, handleChange, isValid];
};

export default useInput;
