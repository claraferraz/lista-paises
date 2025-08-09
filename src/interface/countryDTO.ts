export type CountryType = {
  flags: {
    svg: string;
    alt: string;
  };
  name: {
    common: string;
  };
  region: string;
  population: number;
};

export const brasil: CountryType = {
  flags: {
    svg: "https://flagcdn.com/br.svg",
    alt: "The flag of Brazil has a green field with a large yellow rhombus in the center. Within the rhombus is a dark blue globe with twenty-seven small five-pointed white stars depicting a starry sky and a thin white convex horizontal band inscribed with the national motto 'Ordem e Progresso' across its center.",
  },
  name: {
    common: "Brasil",
  },
  region: "Americas",
  population: 212559409,
};
