import { z } from 'zod';

export const starsType = z.enum(['ESTIMATED_BY_ACCOMMODATION', 'ESTIMATED_BY_BOOKING', 'OFFICIAL']);

export type StarsType = z.infer<typeof starsType>;
