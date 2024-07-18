import { z } from 'zod';
import { scoreBreakdown, scoreBreakdownRequest, scoreBreakdownResponse } from './score-breakdown';
import { scoreDistribution, scoreDistributionRequest, scoreDistributionResponse } from './score-distribution';

/**
 * The shape of the model inside the application code - what the users use
 */
export const reviewScoresOutputDto: any = z.lazy(() => {
  return z.object({
    hotelId: z.number().optional(),
    hotelUrl: z.string().optional(),
    scoreBreakdown: z.array(scoreBreakdown).optional(),
    scoreDistribution: z.array(scoreDistribution).optional(),
  });
});

/**
 *
 * @typedef  {ReviewScoresOutputDto} reviewScoresOutputDto
 * @property {number} - Id of the hotel.
 * @property {string} - URL of the hotel's page on Booking.com.
 * @property {ScoreBreakdown[]} - A breakdown of scores per reviewer type and review question.
 * @property {ScoreDistribution[]} - A breakdown of all review scores into buckets 1 - 10.
 */
export type ReviewScoresOutputDto = z.infer<typeof reviewScoresOutputDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const reviewScoresOutputDtoResponse: any = z.lazy(() => {
  return z
    .object({
      hotel_id: z.number().optional(),
      hotel_url: z.string().optional(),
      score_breakdown: z.array(scoreBreakdownResponse).optional(),
      score_distribution: z.array(scoreDistributionResponse).optional(),
    })
    .transform((data) => ({
      hotelId: data['hotel_id'],
      hotelUrl: data['hotel_url'],
      scoreBreakdown: data['score_breakdown'],
      scoreDistribution: data['score_distribution'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const reviewScoresOutputDtoRequest: any = z.lazy(() => {
  return z
    .object({
      hotelId: z.number().nullish(),
      hotelUrl: z.string().nullish(),
      scoreBreakdown: z.array(scoreBreakdownRequest).nullish(),
      scoreDistribution: z.array(scoreDistributionRequest).nullish(),
    })
    .transform((data) => ({
      hotel_id: data['hotelId'],
      hotel_url: data['hotelUrl'],
      score_breakdown: data['scoreBreakdown'],
      score_distribution: data['scoreDistribution'],
    }));
});
