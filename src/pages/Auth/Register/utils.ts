import { Options } from "../models";

export const handleOptions = (selectType: string): Array<Options> => {
  if (selectType === "role") {
    const options = [
      { value: "Team Member", label: "Team Member" },
      { value: "Team Leader", label: "Team Leader" },
    ];

    return options;
  }

  if (selectType === "continent") {
    return [
      { value: "Africa", label: "Africa" },
      { value: "Asia", label: "Asia" },
      { value: "Europe", label: "Europe" },
      { value: "North America", label: "North America" },
      { value: "Oceania", label: "Oceania" },
      { value: "South America", label: "South America" },
    ];
  }

  if (selectType === "region") {
    return [
      { value: "United States", label: "United States" },
      { value: "Latam", label: "Latam" },
      { value: "Brasil", label: "Brasil" },
      { value: "Australia", label: "Australia" },
      { value: "Japan", label: "Japan" },
      { value: "Others", label: "Others" },
    ];
  }

  return [];
};
