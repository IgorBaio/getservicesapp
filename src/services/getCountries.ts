const apiUrl = 'https://restcountries.com/v3.1/name/';

// Fazendo uma requisição para a API
export const getCountries = (countryName: string) => {
    if (!countryName) return Promise.resolve([])
    return fetch(`${apiUrl}${countryName}`)
        .then(response => response.json())
        .then(data => {
            let result = data?.map((item: { name: { common: any; }; }) => item.name.common)
            result = result?.filter((country: string)=> country.toLowerCase().includes(countryName.toLowerCase()))
            console.log('result', result)

            // Aqui, 'data' é um array de objetos, cada um representando um país
            return result?.filter((_: any, index: number) => index < 5)
        })
        .catch(error => {
            console.error('Erro ao obter dados dos países:', error)
            return Promise.resolve([])
        }
        );

}

