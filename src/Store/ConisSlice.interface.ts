export interface ICoinsState {
    coins: []
    status: 'idle' | 'loading' | 'success' | 'failed'
    error: null
}
