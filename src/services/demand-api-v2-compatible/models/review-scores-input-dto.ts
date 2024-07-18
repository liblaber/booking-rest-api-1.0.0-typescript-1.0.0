import { z } from 'zod';
import { reviewScoresInputDtoLanguage } from './review-scores-input-dto-language';
import { reviewerType } from './reviewer-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const reviewScoresInputDto: any = z.lazy(() => {
  return z.object({
    hotelIds: z.array(z.number()),
    affiliateId: z.number().optional(),
    language: reviewScoresInputDtoLanguage.optional(),
    reviewerType: reviewerType.optional(),
  });
});

/**
 * 
 * @typedef  {ReviewScoresInputDto} reviewScoresInputDto   
 * @property {number[]} - List of hotel ids for which review score information should be displayed.
 * @property {number} - Can be used to specify the affiliate id that should be used instead of the default one.
 * @property {ReviewScoresInputDtoLanguage} - Code of the language used to render response.
Please check the "Possible Values" section of the documentation for the accepted language codes.

 * @property {ReviewerType} - Limits reviews to those written by specific reviewer type.
 */
export type ReviewScoresInputDto = z.infer<typeof reviewScoresInputDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const reviewScoresInputDtoResponse: any = z.lazy(() => {
  return z
    .object({
      hotel_ids: z.array(z.number()),
      affiliate_id: z.number().optional(),
      language: reviewScoresInputDtoLanguage.optional(),
      reviewer_type: reviewerType.optional(),
    })
    .transform((data) => ({
      hotelIds: data['hotel_ids'],
      affiliateId: data['affiliate_id'],
      language: data['language'],
      reviewerType: data['reviewer_type'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const reviewScoresInputDtoRequest: any = z.lazy(() => {
  return z
    .object({
      hotelIds: z.array(z.number()).nullish(),
      affiliateId: z.number().nullish(),
      language: reviewScoresInputDtoLanguage.nullish(),
      reviewerType: reviewerType.nullish(),
    })
    .transform((data) => ({
      hotel_ids: data['hotelIds'],
      affiliate_id: data['affiliateId'],
      language: data['language'],
      reviewer_type: data['reviewerType'],
    }));
});
