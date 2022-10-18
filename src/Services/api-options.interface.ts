interface IOptions {
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
    url: string
    params: {
        referenceCurrencyUuid: string
        timePeriod: string
        'tiers[0]': string
        orderBy: string
        orderDirection: string
        limit: string
        offset: string
    },
    headers: {
        'X-RapidAPI-Key': string
        'X-RapidAPI-Host': string

    }
}

export interface IOptionsAPI {
    coins: IOptions
    markets: IOptions
}

