import { z } from 'zod';
import { constants } from './constants';
import { constantInputDtoLanguages } from './constant-input-dto-languages';

/**
 * The shape of the model inside the application code - what the users use
 */
export const constantInputDto: any = z.lazy(() => {
  return z.object({
    constants: z.array(constants).optional(),
    languages: z.array(constantInputDtoLanguages).optional(),
  });
});

/**
 *
 * @typedef  {ConstantInputDto} constantInputDto
 * @property {Constants[]} - Allows to filter the results only for specific sections.
 * @property {ConstantInputDtoLanguages[]}
 */
export type ConstantInputDto = z.infer<typeof constantInputDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const constantInputDtoResponse: any = z.lazy(() => {
  return z
    .object({
      constants: z.array(constants).optional(),
      languages: z.array(constantInputDtoLanguages).optional(),
    })
    .transform((data) => ({
      constants: data['constants'],
      languages: data['languages'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const constantInputDtoRequest: any = z.lazy(() => {
  return z
    .object({ constants: z.array(constants).nullish(), languages: z.array(constantInputDtoLanguages).nullish() })
    .transform((data) => ({
      constants: data['constants'],
      languages: data['languages'],
    }));
});
