import { ICoin } from '../../Store/coinsSlice/conisSlice.interface'
import { IGlobalStats } from '../../Store/globalStatsSlice/globalStatsSlice.interface'
import { INewsItem } from '../../Store/newsSlice/newsSlice.interface'

export interface IDashboardProps {
    coins: ICoin[] | []
    stats: IGlobalStats | null
    news: INewsItem[] | []
    title: string
}
