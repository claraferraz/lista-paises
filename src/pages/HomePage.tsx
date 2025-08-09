import { CardSection } from "../components/CardSection/CardSection";
import { CountryCard } from "../components/CountryCard/CountryCard";
import { brasil } from "../interface/countryDTO";

export const HomePage = () => {
  return (
    <CardSection>
      <CountryCard country={brasil} liked={false} />
      <CountryCard country={brasil} liked={true} />
      <CountryCard country={brasil} liked={true} />
      <CountryCard country={brasil} liked={true} />
    </CardSection>
  );
};
