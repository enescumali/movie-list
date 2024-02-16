import { ref, type Ref } from 'vue';

const storedCountry = localStorage.getItem('country');
const country = ref<string>(storedCountry || 'NL');

const updateCountry = (newCountry: string) => {
  country.value = newCountry;
  localStorage.setItem('country', newCountry);
};

export interface CountryProvider {
  country: Ref<string>;
  updateCountry: (newCountry: string) => void;
}

export const countryProvider: CountryProvider = {
  country,
  updateCountry
};
