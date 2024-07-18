import { z } from 'zod';

export const getHotelsReviewScoresAccept = z.enum(['application/json, application/xml']);

export type GetHotelsReviewScoresAccept = z.infer<typeof getHotelsReviewScoresAccept>;
