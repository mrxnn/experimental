import { useEffect, useState } from "react";
import tinykeys from "tinykeys";

const useKeyPress = (targetKey: string) => {
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    const unsubs = [
      tinykeys(
        window,
        { [targetKey]: () => setKeyPressed(true) },
        { event: "keydown" }
      ),
      tinykeys(
        window,
        { [targetKey]: () => setKeyPressed(false) },
        { event: "keyup" }
      ),
    ];

    // unsub
    return () => {
      unsubs.forEach((unsub) => unsub());
    };
  }, [targetKey]);

  return keyPressed;
};

export default useKeyPress;
