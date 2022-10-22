export interface IGlobalStatsState {
    stats: IGlobalStats | null
    status: 'idle' | 'loading' | 'success' | 'failed'
    error: null | string
}

export interface BestCoin {
    uuid: string;
    symbol: string;
    name: string;
    iconUrl: string;
    coinrankingUrl: string;
}

export interface NewestCoin {
    uuid: string;
    symbol: string;
    name: string;
    iconUrl: string;
    coinrankingUrl: string;
}

export interface IGlobalStats {
    referenceCurrencyRate: number;
    totalCoins: number;
    totalMarkets: number;
    totalExchanges: number;
    totalMarketCap: string;
    total24hVolume: string;
    btcDominance: number;
    bestCoins: BestCoin[];
    newestCoins: NewestCoin[];
}


export interface IStatsData {
    status: string;
    data: IGlobalStats;
}
