import { z } from 'zod';

export const getHotelThemeTypesAccept = z.enum(['application/json']);

export type GetHotelThemeTypesAccept = z.infer<typeof getHotelThemeTypesAccept>;
