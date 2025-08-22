'use client'

import z from 'zod'
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { todoSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Input } from '../ui/input'
import useTranslate from '@/hooks/use-translate'

function TodoCreateForm() {
	const t = useTranslate()

	const form = useForm<z.infer<typeof todoSchema>>({
		resolver: zodResolver(todoSchema),
		defaultValues: {
			title: '',
		},
	})

	function onSubmit(values: z.infer<typeof todoSchema>) {
		console.log(values)
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='flex justify-between gap-5 mb-5'
			>
				<FormField
					control={form.control}
					name='title'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder={t('inputPlaceholder')}
									className='w-md'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type='submit' variant='outline' className='cursor-pointer'>
					{t('add')}
				</Button>
			</form>
		</Form>
	)
}

export default TodoCreateForm
