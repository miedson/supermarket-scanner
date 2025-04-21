import { z } from 'zod'

export const headerSchema = z.object({
    value: z.string()
})

export type HeaderSchema = z.infer<typeof headerSchema>