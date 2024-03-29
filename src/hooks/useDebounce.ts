import { useEffect, useState } from "react";

// https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci
export default function useDebounce(value: any, delay: number) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      // Set debouncedValue to value (passed in) after the specified delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      // Return a cleanup function that will be called every time
      // useEffect is re-called. useEffect will only be re-called
      // if value changes (see the inputs array below). 
      // This is how we prevent debouncedValue from changing if value is
      // changed within the delay period.
      return () => {
        clearTimeout(handler);
      };
    },
    // Only re-call effect if value changes
    // You could also add the "delay" var to inputs array if you
    // need to be able to change that dynamically.
    [value]
  );

  return debouncedValue;
}
