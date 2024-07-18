import { z } from 'zod';

export const plan = z.enum(['ALL_INCLUSIVE', 'BREAKFAST_INCLUDED', 'FULL_BOARD', 'HALF_BOARD', 'NO_PLAN']);

export type Plan = z.infer<typeof plan>;