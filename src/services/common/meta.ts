// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const meta = z.object({
  ruid: z.string().optional(),
});

/**
 *
 * @typedef  {Meta} meta
 * @property {string}
 */
export type Meta = z.infer<typeof meta>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const metaResponse = z
  .object({
    ruid: z.string().optional(),
  })
  .transform((data) => ({
    ruid: data['ruid'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const metaRequest = z.object({ ruid: z.string().nullish() }).transform((data) => ({
  ruid: data['ruid'],
}));
