import { z } from 'zod';
import { starsType } from './stars-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const ratingDto: any = z.lazy(() => {
  return z.object({
    numberOfReviews: z.number().optional(),
    preferred: z.boolean().optional(),
    reviewScore: z.number().optional(),
    stars: z.number().gte(1).lte(5).multipleOf(0.1).optional(),
    starsType: starsType.optional(),
  });
});

/**
 *
 * @typedef  {RatingDto} ratingDto
 * @property {number} - Number of validated reviews for this accommodation.
 * @property {boolean} - Boolean value is "true" if this accommodation is in the Booking.com's preferred program and "false" otherwise.
 * @property {number} - A decimal number indicating the current review score of this accommodation property, in the range 1..10.
 * @property {number} - Number of stars of this accommodation property.
 * @property {StarsType} - An enumerated value describing which type of stars this accommodation has.
 */
export type RatingDto = z.infer<typeof ratingDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const ratingDtoResponse: any = z.lazy(() => {
  return z
    .object({
      number_of_reviews: z.number().optional(),
      preferred: z.boolean().optional(),
      review_score: z.number().optional(),
      stars: z.number().gte(1).lte(5).multipleOf(0.1).optional(),
      stars_type: starsType.optional(),
    })
    .transform((data) => ({
      numberOfReviews: data['number_of_reviews'],
      preferred: data['preferred'],
      reviewScore: data['review_score'],
      stars: data['stars'],
      starsType: data['stars_type'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const ratingDtoRequest: any = z.lazy(() => {
  return z
    .object({
      numberOfReviews: z.number().nullish(),
      preferred: z.boolean().nullish(),
      reviewScore: z.number().nullish(),
      stars: z.number().nullish(),
      starsType: starsType.nullish(),
    })
    .transform((data) => ({
      number_of_reviews: data['numberOfReviews'],
      preferred: data['preferred'],
      review_score: data['reviewScore'],
      stars: data['stars'],
      stars_type: data['starsType'],
    }));
});
