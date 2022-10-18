import millify from 'millify'

export const DataForWidget = <T>(dataArray: T[], itemAmount : number): T[] => dataArray.slice(0, itemAmount)
export const minifyNumber = (num: number, precision= 6 )=> millify(num, {
    precision: precision,
    lowercase: true
})
