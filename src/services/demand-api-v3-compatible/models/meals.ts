import { z } from 'zod';

export const meals = z.enum(['BREAKFAST', 'DINNER', 'LUNCH']);

export type Meals = z.infer<typeof meals>;
