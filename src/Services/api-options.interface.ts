type RequestMethods = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'


interface IOptions<T> {
    method: RequestMethods
    url: string
    params?: T
    headers: {
        'X-RapidAPI-Key': string
        'X-RapidAPI-Host': string

    }
}

interface ICoinsRequestParams {
    referenceCurrencyUuid:string
    timePeriod: string
    'tiers[0]': string
    orderBy: string
    orderDirection: string
    limit: string
    offset: string
}

interface IGlobalStatsRequestParams {
    referenceCurrencyUuid:string
}

export interface IOptionsAPI {
    coins: IOptions<ICoinsRequestParams>
    markets: IOptions<ICoinsRequestParams>
    news: IOptions<any>
    globalStats: IOptions<IGlobalStatsRequestParams>
}

