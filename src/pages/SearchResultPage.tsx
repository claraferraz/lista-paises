import type { CountryType } from "../interface/countryDTO";

type Props = {
  country: CountryType[];
};

export const SearchResultPage = ({ country }: Props) => {
  return (
    <div>
      {country.map((country) => {
        return <p>{country.name.common}</p>;
      })}
    </div>
  );
};
