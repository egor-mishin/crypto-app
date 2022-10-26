export interface IAppInitState {
    appInitStatus: 'idle' | 'loading' | 'success' | 'failed'
    errors: string[]
}
