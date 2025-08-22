import LanguageDropdown from '@/components/shared/language-dropdown'
import ModeToggle from '@/components/shared/mode-toggle'
import Link from 'next/link'

function Navbar() {
	return (
		<header className='fixed inset-0 h-20 px-10 border-b'>
			<div className='container max-w-7xl mx-auto size-full flex justify-between items-center'>
				<Link href='/' className='text-2xl font-semibold'>
					Todo App
				</Link>

				<div className='flex items-center gap-2'>
					<ModeToggle />
					<LanguageDropdown />
				</div>
			</div>
		</header>
	)
}

export default Navbar
