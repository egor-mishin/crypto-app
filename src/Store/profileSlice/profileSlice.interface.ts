export interface IProfileState {
    userInfo: unknown
    status: 'idle' | 'loading' | 'success' | 'failed'
    errorCode: null
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
    coins: ICoin[];
}

export interface ICoinsData {
    status: string;
    data: IData;
}
