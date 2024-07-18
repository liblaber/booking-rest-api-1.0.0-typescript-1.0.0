import { z } from 'zod';
import { allocationInputDto, allocationInputDtoRequest, allocationInputDtoResponse } from './allocation-input-dto';

/**
 * The shape of the model inside the application code - what the users use
 */
export const guestsInputDto: any = z.lazy(() => {
  return z.object({
    numberOfAdults: z.number(),
    numberOfRooms: z.number(),
    allocation: z.array(allocationInputDto).optional(),
    children: z.array(z.number()).optional(),
  });
});

/**
 * The guest details for the request.
 * @typedef  {GuestsInputDto} guestsInputDto - The guest details for the request. - The guest details for the request.
 * @property {number} - The number of adults for the search.
 * @property {number} - The number of rooms needed.
 * @property {AllocationInputDto[]} - The exact allocation of guests to rooms.
 * @property {number[]} - Array with the children ages.
 */
export type GuestsInputDto = z.infer<typeof guestsInputDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const guestsInputDtoResponse: any = z.lazy(() => {
  return z
    .object({
      number_of_adults: z.number(),
      number_of_rooms: z.number(),
      allocation: z.array(allocationInputDtoResponse).optional(),
      children: z.array(z.number()).optional(),
    })
    .transform((data) => ({
      numberOfAdults: data['number_of_adults'],
      numberOfRooms: data['number_of_rooms'],
      allocation: data['allocation'],
      children: data['children'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const guestsInputDtoRequest: any = z.lazy(() => {
  return z
    .object({
      numberOfAdults: z.number().nullish(),
      numberOfRooms: z.number().nullish(),
      allocation: z.array(allocationInputDtoRequest).nullish(),
      children: z.array(z.number()).nullish(),
    })
    .transform((data) => ({
      number_of_adults: data['numberOfAdults'],
      number_of_rooms: data['numberOfRooms'],
      allocation: data['allocation'],
      children: data['children'],
    }));
});
