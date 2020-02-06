import { writable } from 'svelte/store';

const createWritableStore = (key, startValue) => {
  const { subscribe, set } = writable(startValue);

  return {
    subscribe,
    set,
    useLocalStorage: () => {
      const json =
        typeof window !== undefined ? localStorage.getItem(key) : undefined;
      if (json) {
        set(JSON.parse(json));
      }

      if (typeof window !== undefined) {
        subscribe(current => {
          localStorage.setItem(key, JSON.stringify(current));
        });
      }
    }
  };
};

export const storage = createWritableStore('storage', {});
