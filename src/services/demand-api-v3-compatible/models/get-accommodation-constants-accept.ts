import { z } from 'zod';

export const getAccommodationConstantsAccept = z.enum(['application/json']);

export type GetAccommodationConstantsAccept = z.infer<typeof getAccommodationConstantsAccept>;
