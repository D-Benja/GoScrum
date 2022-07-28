import { useEffect, useState } from "react";
import { handleRadius, handleStrokeWidth } from "../utils";

interface CircleProgressBarValues {
  radius: string;
  strokeWidth: string;
}

export const useCircleProgressBar = (display: string) => {
  const [values, setValues] = useState<CircleProgressBarValues>({
    radius: handleRadius(display),
    strokeWidth: handleStrokeWidth(display),
  });

  useEffect(() => {
    setValues({
      radius: handleRadius(display),
      strokeWidth: handleStrokeWidth(display),
    });
  }, [display]);

  return values;
};
