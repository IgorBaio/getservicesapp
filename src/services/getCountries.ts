const apiUrl = 'https://restcountries.com/v3.1/name/';

// Fazendo uma requisição para a API
const getCountries = (countryName: string) =>  {
    return fetch(`${apiUrl}${countryName}`)
        .then(response => response.json())
        .then(data => {
        // Aqui, 'data' é um array de objetos, cada um representando um país
        console.log(data);
        })
        .catch(error => console.error('Erro ao obter dados dos países:', error));
    
}

