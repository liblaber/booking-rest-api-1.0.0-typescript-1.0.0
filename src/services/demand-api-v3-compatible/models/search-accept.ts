// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const searchAccept = z.enum(['application/json']);

export type SearchAccept = z.infer<typeof searchAccept>;