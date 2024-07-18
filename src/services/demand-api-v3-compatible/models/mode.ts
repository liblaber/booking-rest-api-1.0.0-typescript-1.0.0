import { z } from 'zod';

export const mode = z.enum([
  'CALCULATED_AMOUNT',
  'INCALCULABLE',
  'PERCENTAGE',
  'PER_NIGHT',
  'PER_PERSON_PER_NIGHT',
  'PER_PERSON_PER_STAY',
  'PER_STAY',
]);

export type Mode = z.infer<typeof mode>;
