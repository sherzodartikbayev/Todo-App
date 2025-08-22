'use client'

import { z } from 'zod'

export const todoSchema = z.object({
	title: z.string().min(2).max(25),
})
