export interface IAppInitState {
    appInitStatus: 'idle' | 'loading' | 'success' | 'failed'
    errorCode: number | null
}
