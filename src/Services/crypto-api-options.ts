import { IOptionsAPI } from './api-options.interface'

export const options: IOptionsAPI = {
    coins: {
        method: 'GET',
        url: `${process.env.REACT_APP_COINS_BASE_URL}/coins`,
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
            'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',

        },
    },

    markets: {
        method: 'GET',
        url: `${process.env.REACT_APP_COINS_BASE_URL}/coin/Qwsogvtv82FCd/markets`,
        params: {
            referenceCurrencyUuid: 'yhjMzLPhuIDl',
            timePeriod: '24h',
            'tiers[0]': '1',
            orderBy: '24hVolume',
            orderDirection: 'desc',
            limit: '50',
            offset: '0',
        },
        headers: {
            'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',

        },
    },

    news: {
        method: 'GET',
        url: `${process.env.REACT_APP_NEWS_BASE_URL}/news`,
        params :{
            category: 'crypto'
        },
        headers: {
            'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
            'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com'
    }
    },

    globalStats: {
        method: 'GET',
        url: `${process.env.REACT_APP_COINS_BASE_URL}/stats`,
        params: { referenceCurrencyUuid: 'yhjMzLPhuIDl' },
        headers: {
            'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    }
}
