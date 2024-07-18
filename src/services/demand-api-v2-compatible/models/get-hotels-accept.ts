import { z } from 'zod';

export const getHotelsAccept = z.enum(['application/json, application/xml']);

export type GetHotelsAccept = z.infer<typeof getHotelsAccept>;
