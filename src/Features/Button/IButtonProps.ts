import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode
    size?: 's' | 'm' | 'l'
    kind?: 'regular' | 'outline' | 'auth' | 'login' | 'more',
    click?: (args: any) => void
    params?: unknown
}

