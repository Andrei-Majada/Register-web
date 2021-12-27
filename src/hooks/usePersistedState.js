import { useState, useEffect } from 'react';

const usePersistedState = (key, initialState, useSessionStorage = false) => {
  const storage = (useSessionStorage ? sessionStorage : localStorage);

  const [state, setState] = useState(() => {
    const storageValue = storage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    }
    return initialState;
  });

  useEffect(() => {
    storage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default usePersistedState;
