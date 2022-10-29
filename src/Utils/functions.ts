import millify from 'millify'

export const DataForWidget = <T>(dataArray: T[], itemAmount : number): T[] => dataArray.slice(0, itemAmount)
export const minifyNumber = (num: number, precision= 6 )=> millify(num, {
    precision: precision,
    lowercase: true
})

export const getError = (errorCode: number | null): string => {
    switch (errorCode){
        case 404:
            return 'Page not found'
        case 500:
            return 'Server Internal Error'
        default:
            return ''
    }
}
