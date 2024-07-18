import { z } from 'zod';

export const paymentTypes = z.enum(['PAY_LATER', 'PAY_NOW']);

export type PaymentTypes = z.infer<typeof paymentTypes>;
