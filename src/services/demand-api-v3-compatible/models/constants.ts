import { z } from 'zod';

export const constants = z.enum([
  'ACCOMMODATION_TYPES',
  'ACCOMMODATION_FACILITIES',
  'ACCOMMODATION_THEMES',
  'BED_TYPES',
  'FACILITY_TYPES',
  'CHARGE_TYPES',
  'ROOM_TYPES',
  'ROOM_FACILITIES',
  'REVIEW_SCORES',
]);

export type Constants = z.infer<typeof constants>;
