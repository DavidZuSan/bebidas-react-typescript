import { z } from 'zod';

export const CategroiesAPIResponseSchema = z.object({
    drinks: z.array(
        z.object({
            strCategory: z.string(),
    }))
});