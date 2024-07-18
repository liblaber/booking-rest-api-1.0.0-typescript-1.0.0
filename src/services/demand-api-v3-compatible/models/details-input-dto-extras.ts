import { z } from 'zod';

export const detailsInputDtoExtras = z.enum(['DESCRIPTION', 'FACILITIES', 'PAYMENT', 'PHOTOS', 'POLICIES', 'ROOMS']);

export type DetailsInputDtoExtras = z.infer<typeof detailsInputDtoExtras>;
