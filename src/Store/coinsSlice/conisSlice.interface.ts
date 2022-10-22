export interface ICoinsState {
    coins: ICoin[]
    status: 'idle' | 'loading' | 'success' | 'failed'
    error: null
}

export interface IStats {
    total: number;
    totalCoins: number;
    totalMarkets: number;
    totalExchanges: number;
    totalMarketCap: string;
    total24hVolume: string;
}

export interface ICoin {
    uuid: string;
    symbol: string;
    name: string;
    color: string;
    iconUrl: string;
    marketCap: string;
    price: string;
    btcPrice: string;
    listedAt: number;
    change: string;
    rank: number;
    sparkline: string[];
    coinrankingUrl: string;
    _24hVolume: string
}


export interface IData {
    stats: IStats;
    coins: ICoin[];
}

export interface ICoinsData {
    status: string;
    data: IData;
}
