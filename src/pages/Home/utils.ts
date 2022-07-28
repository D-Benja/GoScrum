export const circleProgressBarAnimation = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 0.75,
    opacity: 1,
    transition: {
      pathLength: { type: "spring", duration: 2.5, bounce: 0 },
      opacity: { duration: 0.1 },
    },
  },
};

const options = [
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium" },
  { label: "High", value: "high" },
];

export const handleRadius = (value: string) => {
  if (value === "md") {
    return "30px";
  }

  if (value === "lg") {
    return "50px";
  }

  return "70px";
};
export const handleStrokeWidth = (value: string) => {
  if (value === "md") {
    return "12px";
  }

  if (value === "lg") {
    return "16px";
  }

  return "16px";
};

export const handlePriority = (priority: number) => {
  if (priority === 1) {
    return "bg-red-400";
  } else if (priority === 2) {
    return "bg-orange-400";
  } else if (priority === 3) {
    return "bg-green-400";
  }

  return;
};
