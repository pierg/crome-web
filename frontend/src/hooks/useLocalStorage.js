import "react"
import "uuid"
import useState }
import { useEffect
import { v4 as uuidV4 }

const PREFIX = "CROME-";

export default function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue === "undefined") {
      const new_id = uuidV4();
      localStorage.setItem(key, JSON.stringify(new_id));
      return new_id;
    }
    if (jsonValue != null) return JSON.parse(jsonValue);
    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
}
