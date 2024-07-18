import { z } from 'zod';
import { questionDto, questionDtoRequest, questionDtoResponse } from './question-dto';

/**
 * The shape of the model inside the application code - what the users use
 */
export const scoreBreakdown: any = z.lazy(() => {
  return z.object({
    averageScore: z.number().multipleOf(0.1).optional(),
    count: z.number().optional(),
    question: z.array(questionDto).optional(),
    reviewerType: z.string().optional(),
  });
});

/**
 * A breakdown of scores per reviewer type and review question.
 * @typedef  {ScoreBreakdown} scoreBreakdown - A breakdown of scores per reviewer type and review question. - A breakdown of scores per reviewer type and review question.
 * @property {number} - Average score from this reviewer type.
 * @property {number} - Number of responses from this reviewer type.
 * @property {QuestionDto[]} - Review scores per question.
 * @property {string} - Reviewer type.
 */
export type ScoreBreakdown = z.infer<typeof scoreBreakdown>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const scoreBreakdownResponse: any = z.lazy(() => {
  return z
    .object({
      average_score: z.number().multipleOf(0.1).optional(),
      count: z.number().optional(),
      question: z.array(questionDtoResponse).optional(),
      reviewer_type: z.string().optional(),
    })
    .transform((data) => ({
      averageScore: data['average_score'],
      count: data['count'],
      question: data['question'],
      reviewerType: data['reviewer_type'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const scoreBreakdownRequest: any = z.lazy(() => {
  return z
    .object({
      averageScore: z.number().nullish(),
      count: z.number().nullish(),
      question: z.array(questionDtoRequest).nullish(),
      reviewerType: z.string().nullish(),
    })
    .transform((data) => ({
      average_score: data['averageScore'],
      count: data['count'],
      question: data['question'],
      reviewer_type: data['reviewerType'],
    }));
});
