import { z } from 'zod';

export const type_ = z.enum(['FREE_CANCELLATION', 'NON_REFUNDABLE', 'SPECIAL_CONDITIONS']);

export type Type_ = z.infer<typeof type_>;
