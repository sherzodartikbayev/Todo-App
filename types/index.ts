import { ReactNode } from 'react'

export interface ChildProps {
	children: ReactNode
}

export interface LngParams {
	params: { lng: string }
}

export interface ITodoItem {
	id: string | number
	title: string
}
