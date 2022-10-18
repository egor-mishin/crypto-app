import { ReactNode } from 'react'

export interface ICardProps {
    children: ReactNode
    size: 's' | 'm' | 'l'
    className?: string
}
