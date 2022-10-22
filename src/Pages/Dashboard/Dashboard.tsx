import React, { FC } from 'react'
import { IDashboardProps } from './Dashboard.props'
import { DataForWidget } from '../../Utils'
import { Card, CoinCard, Htag, NewsCard } from '../../Features'
import { ICoin } from '../../Store/coinsSlice/conisSlice.interface'
import Widget from '../../Features/Widget/Widget'
import css from './Dashboard.module.scss'
import Stats from '../../Features/Stats/Stats'
import { INewsItem } from '../../Store/newsSlice/newsSlice.interface'

const Dashboard: FC<IDashboardProps> = ({ coins, title, stats,news }) => {

    const coinsForWidget = DataForWidget<ICoin>(coins, 5)
    const newsForWidget = DataForWidget<INewsItem>(news, 5)

    return (
        <>
            <Htag tag={'h1'}>{title}</Htag>

            <Widget type={'coins'} title={'Top 5 coins'}>
                {
                    coinsForWidget.map(c => (
                        <Card key={c.uuid}>
                            <CoinCard {...c} size={'s'} />
                        </Card>),
                    )
                }
            </Widget>
           <div className={css.flex}>
               <Widget type={'stats'} title={'Global Statistics'}>
                  <Stats {...stats}/>
               </Widget>
               <Widget type={'news'} title={'Crypto News'}>
                   {
                       newsForWidget.map((n, i) => (
                           <Card key={`${i}-${n.title}`}>
                               <NewsCard {...n}  />
                           </Card>),
                       )
                   }
               </Widget>
           </div>

        </>
    )


}

export default Dashboard

