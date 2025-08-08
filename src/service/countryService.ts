//"all?fields=name,flags,region,population";

import type { CountryType } from "../interface/countryDTO";

//"{pais}?fields=name,flags,region,population";
const apiURL = process.env.REACT_APP_API_URL;

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

export const getCountryByName = async (
  country: string
): Promise<CountryType[]> => {
  try {
    const response = await fetch(
      `${apiURL}/name/${country}?fields=name,flags,region,population`
    );

    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
