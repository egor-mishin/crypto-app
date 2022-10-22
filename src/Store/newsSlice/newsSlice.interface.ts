import { IData } from '../coinsSlice/conisSlice.interface'

export interface INewsState {
    news: INewsItem[]
    status: 'idle' | 'loading' | 'success' | 'failed'
    error: null
}

export interface INewsItem {
    title: string
    url: string
    source: string
}

