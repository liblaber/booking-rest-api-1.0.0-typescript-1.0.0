import { z } from 'zod';

export const tags = z.enum([
  'BLACK_FRIDAY',
  'GENIUS',
  'LIMITED_TIME_DEAL',
  'LOGGED_IN_DEAL',
  'MOBILE_RATE',
  'SEASONAL_DEAL',
]);

export type Tags = z.infer<typeof tags>;
