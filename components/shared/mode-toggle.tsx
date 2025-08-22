'use client'

import { useTheme } from 'next-themes'
import { Button } from '../ui/button'
import { Moon, Sun } from 'lucide-react'

function ModeToggle() {
	const { theme, setTheme } = useTheme()

	return theme === 'dark' ? (
		<Button
			variant='ghost'
			size='icon'
			className='cursor-pointer'
			onClick={() => setTheme('light')}
		>
			<Sun />
		</Button>
	) : (
		<Button
			variant='ghost'
			size='icon'
			className='cursor-pointer'
			onClick={() => setTheme('dark')}
		>
			<Moon />
		</Button>
	)
}

export default ModeToggle
