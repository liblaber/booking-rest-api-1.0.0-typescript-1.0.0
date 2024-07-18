import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const questionDto: any = z.lazy(() => {
  return z.object({
    count: z.number().optional(),
    question: z.string().optional(),
    questionLiteral: z.string().optional(),
    score: z.number().multipleOf(0.1).optional(),
  });
});

/**
 * Review scores per question.
 * @typedef  {QuestionDto} questionDto - Review scores per question. - Review scores per question.
 * @property {number} - Number of reviewers that answered the question.
 * @property {string} - Localized question text. See language=... input parameter.
 * @property {string} - Question literal.
 * @property {number} - Average score that reviewers provided in response to this question.
 */
export type QuestionDto = z.infer<typeof questionDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const questionDtoResponse: any = z.lazy(() => {
  return z
    .object({
      count: z.number().optional(),
      question: z.string().optional(),
      question_literal: z.string().optional(),
      score: z.number().multipleOf(0.1).optional(),
    })
    .transform((data) => ({
      count: data['count'],
      question: data['question'],
      questionLiteral: data['question_literal'],
      score: data['score'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const questionDtoRequest: any = z.lazy(() => {
  return z
    .object({
      count: z.number().nullish(),
      question: z.string().nullish(),
      questionLiteral: z.string().nullish(),
      score: z.number().nullish(),
    })
    .transform((data) => ({
      count: data['count'],
      question: data['question'],
      question_literal: data['questionLiteral'],
      score: data['score'],
    }));
});
