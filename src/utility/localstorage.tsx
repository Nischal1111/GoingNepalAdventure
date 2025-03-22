// LocalStorage.ts
// Check if we're running in the browser environment
export const isBrowser = (): boolean => {
  return typeof window !== 'undefined';
};

// Safe localStorage getter
export const getLocalStorage = (key: string, defaultValue: any = null): any => {
  if (!isBrowser()) {
    return defaultValue;
  }
  
  try {
    const value = localStorage.getItem(key);
    if (value === null) {
      return defaultValue;
    }
    return JSON.parse(value);
  } catch (error) {
    console.error(`Error reading localStorage key "${key}":`, error);
    return defaultValue;
  }
};

// Safe localStorage setter
export const setLocalStorage = (key: string, value: any): boolean => {
  if (!isBrowser()) {
    return false;
  }
  
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Error setting localStorage key "${key}":`, error);
    return false;
  }
};

// Safe localStorage remover
export const removeLocalStorage = (key: string): boolean => {
  if (!isBrowser()) {
    return false;
  }
  
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error(`Error removing localStorage key "${key}":`, error);
    return false;
  }
};