import { IRoutes } from './routes.interface'
import { dashboard, markets, mycoins, news, profile } from './NavBar/Assets/Icons/index'

export const routes: IRoutes[] = [
    {
        title: 'Dashboard',
        link: '/',
        icon: dashboard,
    },
    {
        title: 'Profile',
        link: 'profile',
        icon: profile,
    },
    {
        title: 'Coins',
        link: 'coins',
        icon: mycoins,
    },
    {
        title: 'Markets',
        link: 'markets',
        icon: markets,
    },
    {
        title: 'News',
        link: 'news',
        icon: news,
    },
]
