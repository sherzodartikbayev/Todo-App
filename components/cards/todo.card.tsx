'use client'

import useTranslate from '@/hooks/use-translate'
import TodoCreateForm from '../forms/todo-create.form'
import { todos } from '@/constants'
import TodoItemCard from './todo-item.card'

function TodoCard() {
	const t = useTranslate()

	return (
		<div className='w-2xl p-10 rounded-md border'>
			<h1 className='text-4xl font-bold mb-5'>{t('title')}</h1>

			<TodoCreateForm />

			<div className='flex flex-col gap-3'>
				{todos.map(todo => (
					<TodoItemCard key={todo.id} {...todo} />
				))}
			</div>
		</div>
	)
}

export default TodoCard
