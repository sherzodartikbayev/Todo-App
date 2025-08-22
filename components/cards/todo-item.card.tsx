import { ITodoItem } from '@/types'
import { Button } from '../ui/button'
import useTranslate from '@/hooks/use-translate'

function TodoItemCard(todo: ITodoItem) {
	const t = useTranslate()

	return (
		<div
			className='p-4 w-full rounded-md border flex justify-between items-center'
			key={todo.id}
		>
			<p className=''>{todo.title}</p>

			<div className='flex items-center gap-2'>
				<Button variant='outline' className='cursor-pointer'>
					{t('update')}
				</Button>
				<Button variant='destructive' className='cursor-pointer'>
					{t('delete')}
				</Button>
			</div>
		</div>
	)
}

export default TodoItemCard
