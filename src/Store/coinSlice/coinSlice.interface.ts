export interface ICoinState {
    coinData: ICoin | {}
    status: 'idle' | 'loading' | 'success' | 'failed'
    error: null
}

export interface ICoinDetailsParams {coinId: string, timePeriod: string}

export interface ILink {
    name: string;
    url: string;
    type: string;
}

export interface Supply {
    confirmed: boolean;
    circulating: string;
    total: string;
}

export interface AllTimeHigh {
    price: string;
    timestamp: number;
}

export interface ICoin {
    uuid: string
    symbol: string
    name: string;
    description: string
    color: string
    iconUrl: string
    websiteUrl: string
    links: ILink[]
    supply: Supply
    _24hVolume: string
    marketCap: string
    price: string
    btcPrice: string
    change: string
    rank: number
    numberOfMarkets: number
    numberOfExchanges: number
    sparkline: string[]
    allTimeHigh: AllTimeHigh
    coinrankingUrl: string
}

export interface ICoinResponse {
    status: string;
    data: {coin: ICoin};
}


