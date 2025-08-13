import type { CountryType } from "../interface/countryType";

const apiURL = import.meta.env.VITE_API_URL;

export const getAllCountries = async (): Promise<CountryType[]> => {
  try {
    const response = await fetch(
      `${apiURL}/all?fields=name,flags,region,population`
    );

    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
