import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react'

export interface IInputProps  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    children: ReactNode
    kind?: 'regular' | 'search' | 'auth'
}
