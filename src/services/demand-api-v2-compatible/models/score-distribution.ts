// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const scoreDistribution = z.object({
  count: z.number().optional(),
  percent: z.number().multipleOf(0.01).optional(),
  score: z.number().optional(),
});

/**
 * A breakdown of all review scores into buckets 1 - 10.
 * @typedef  {ScoreDistribution} scoreDistribution - A breakdown of all review scores into buckets 1 - 10. - A breakdown of all review scores into buckets 1 - 10.
 * @property {number} - Total number of reviews in this bucket.
 * @property {number} - Percent of score distribution that went into this bucket.
 * @property {number} - The bucket's review score value (1 - 10).
 */
export type ScoreDistribution = z.infer<typeof scoreDistribution>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const scoreDistributionResponse = z
  .object({
    count: z.number().optional(),
    percent: z.number().multipleOf(0.01).optional(),
    score: z.number().optional(),
  })
  .transform((data) => ({
    count: data['count'],
    percent: data['percent'],
    score: data['score'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const scoreDistributionRequest = z
  .object({ count: z.number().nullish(), percent: z.number().nullish(), score: z.number().nullish() })
  .transform((data) => ({
    count: data['count'],
    percent: data['percent'],
    score: data['score'],
  }));