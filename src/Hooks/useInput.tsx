import React, { useState } from 'react';

const useInput = (initialValue: string) => {
  const [value, setInput] = useState(initialValue);
  const handleChange = (e: any) => {
    setInput(e.vaule);
  };
  return { value, handleChange };
};
