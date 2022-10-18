export const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        'tiers[0]': '1',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: '50',
        offset: '0',
    },
    headers: {
        'X-RapidAPI-Key': '295aa9c0f1msh437181de6d4ffc3p121624jsn85799d8d7344',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',

    },
}
