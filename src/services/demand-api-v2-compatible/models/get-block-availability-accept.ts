// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const getBlockAvailabilityAccept = z.enum(['application/json, application/xml']);

export type GetBlockAvailabilityAccept = z.infer<typeof getBlockAvailabilityAccept>;