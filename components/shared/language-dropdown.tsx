'use client'

import Link from 'next/link'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { lngs } from '@/constants'
import { Button } from '../ui/button'
import { Languages } from 'lucide-react'
import useTranslate from '@/hooks/use-translate'
import { useParams } from 'next/navigation'
import { setLanguage } from '@/lib/utils'

function LanguageDropdown() {
	const { lng } = useParams()
	const t = useTranslate()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='ghost'
					size='icon'
					className='w-full bg-secondary cursor-pointer'
				>
					<Languages />
					<span>{t(setLanguage(lng as string))}</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{lngs.map(lng => (
					<Link key={lng.route} href={lng.route}>
						<DropdownMenuItem>{lng.label}</DropdownMenuItem>
					</Link>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default LanguageDropdown
