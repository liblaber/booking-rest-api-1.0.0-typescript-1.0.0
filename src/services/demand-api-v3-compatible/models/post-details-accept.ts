import { z } from 'zod';

export const postDetailsAccept = z.enum(['application/json']);

export type PostDetailsAccept = z.infer<typeof postDetailsAccept>;
