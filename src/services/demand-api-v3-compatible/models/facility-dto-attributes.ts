import { z } from 'zod';

export const facilityDtoAttributes = z.enum(['OFFSITE', 'PAID']);

export type FacilityDtoAttributes = z.infer<typeof facilityDtoAttributes>;
