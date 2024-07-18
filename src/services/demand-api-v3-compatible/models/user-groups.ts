import { z } from 'zod';

export const userGroups = z.enum(['AUTHENTICATED', 'GENIUS', 'GENIUS2', 'GENIUS3']);

export type UserGroups = z.infer<typeof userGroups>;
