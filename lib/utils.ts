import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function setLanguage(lng: string) {
	switch (lng) {
		case 'en':
			return 'English'
		case 'ru':
			return 'Русский'
		case 'uz':
			return "O'zbekcha"
		default:
			return 'English'
	}
}
