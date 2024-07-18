import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const localTime: any = z.lazy(() => {
  return z.object({
    hour: z.number().optional(),
    minute: z.number().optional(),
    second: z.number().optional(),
    nano: z.number().optional(),
  });
});

/**
 * The time till when checkout can be done at this property.
 * @typedef  {LocalTime} localTime - The time till when checkout can be done at this property. - The time till when checkout can be done at this property.
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type LocalTime = z.infer<typeof localTime>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const localTimeResponse: any = z.lazy(() => {
  return z
    .object({
      hour: z.number().optional(),
      minute: z.number().optional(),
      second: z.number().optional(),
      nano: z.number().optional(),
    })
    .transform((data) => ({
      hour: data['hour'],
      minute: data['minute'],
      second: data['second'],
      nano: data['nano'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const localTimeRequest: any = z.lazy(() => {
  return z
    .object({
      hour: z.number().nullish(),
      minute: z.number().nullish(),
      second: z.number().nullish(),
      nano: z.number().nullish(),
    })
    .transform((data) => ({
      hour: data['hour'],
      minute: data['minute'],
      second: data['second'],
      nano: data['nano'],
    }));
});
