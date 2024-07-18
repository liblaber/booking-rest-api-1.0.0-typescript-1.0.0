import { z } from 'zod';

export const getHotelAvailabilityAccept = z.enum(['application/json']);

export type GetHotelAvailabilityAccept = z.infer<typeof getHotelAvailabilityAccept>;
