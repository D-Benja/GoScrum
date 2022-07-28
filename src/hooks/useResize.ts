import { useEffect, useState } from "react";

export const useResize = (): string => {
  const [display, setDisplay] = useState<string>("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDisplay("sm");
      } else if (window.innerWidth < 1024) {
        setDisplay("md");
      } else if (window.innerWidth < 1440) {
        setDisplay("lg");
      } else if (window.innerWidth > 1440) {
        setDisplay("xl");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return display;
};
