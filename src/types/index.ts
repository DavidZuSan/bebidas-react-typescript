import { z } from 'zod';
import { CategroiesAPIResponseSchema } from '../utils/recipes-schema';

export type Categories = z.infer<typeof CategroiesAPIResponseSchema>