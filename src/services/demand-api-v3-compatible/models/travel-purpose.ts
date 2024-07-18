import { z } from 'zod';

export const travelPurpose = z.enum(['BUSINESS', 'LEISURE']);

export type TravelPurpose = z.infer<typeof travelPurpose>;
