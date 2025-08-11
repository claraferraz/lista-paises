export type NativeNames = {
  official: string;
  common: string;
};

export type CountryType = {
  flags: {
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    nativeName: Record<string, NativeNames>;
  };
  region: string;
  population: number;
};
