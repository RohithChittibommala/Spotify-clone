import { useRef } from "react";
import { useEffect, useState } from "react";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const timerId = useRef();

  useEffect(() => {
    clearTimeout(timerId.current);
    timerId.current = setTimeout(() => setDebouncedValue(value), delay);
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
