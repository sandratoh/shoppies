// Libraries
import { useState, useEffect } from 'react';

export const useDebounce = (input: string, ms: number) => {
  const [debounced, setDebounced] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => setDebounced(input), ms);
    return () => clearTimeout(timeout);
  }, [input, ms]);

  return debounced;
};

export default useDebounce;
