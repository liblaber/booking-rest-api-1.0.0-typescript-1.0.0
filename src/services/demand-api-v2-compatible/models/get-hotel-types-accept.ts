import { z } from 'zod';

export const getHotelTypesAccept = z.enum(['application/json']);

export type GetHotelTypesAccept = z.infer<typeof getHotelTypesAccept>;
