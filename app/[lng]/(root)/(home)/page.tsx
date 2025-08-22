'use client'

import useTranslate from '@/hooks/use-translate'

function Page() {
	const t = useTranslate()

	return (
		<section className=''>
			<div className='container max-w-7xl mx-auto w-full min-h-[80vh] flex items-center justify-center'>
				<h1 className='text-5xl font-bold text-center'>{t('title')}</h1>
			</div>
		</section>
	)
}

export default Page
