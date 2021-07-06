const BASE_URL = 'https://restcountries.eu/rest/v2';

export default {
    fetchCountry(countryName) {
        return fetch(`${BASE_URL}/name/${countryName}`).then(response => response.json());
    }
};



