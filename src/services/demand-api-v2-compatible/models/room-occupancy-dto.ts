import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const roomOccupancyDto: any = z.lazy(() => {
  return z.object({
    allowCribsAndExtraBeds: z.boolean().optional(),
    maxAdults: z.number().optional(),
    maxChildren: z.number().optional(),
    maxCribs: z.number().optional(),
    maxExtraBeds: z.number().optional(),
    maxOccupancy: z.number().optional(),
  });
});

/**
 *
 * @typedef  {RoomOccupancyDto} roomOccupancyDto
 * @property {boolean}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type RoomOccupancyDto = z.infer<typeof roomOccupancyDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const roomOccupancyDtoResponse: any = z.lazy(() => {
  return z
    .object({
      allow_cribs_and_extra_beds: z.boolean().optional(),
      max_adults: z.number().optional(),
      max_children: z.number().optional(),
      max_cribs: z.number().optional(),
      max_extra_beds: z.number().optional(),
      max_occupancy: z.number().optional(),
    })
    .transform((data) => ({
      allowCribsAndExtraBeds: data['allow_cribs_and_extra_beds'],
      maxAdults: data['max_adults'],
      maxChildren: data['max_children'],
      maxCribs: data['max_cribs'],
      maxExtraBeds: data['max_extra_beds'],
      maxOccupancy: data['max_occupancy'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const roomOccupancyDtoRequest: any = z.lazy(() => {
  return z
    .object({
      allowCribsAndExtraBeds: z.boolean().nullish(),
      maxAdults: z.number().nullish(),
      maxChildren: z.number().nullish(),
      maxCribs: z.number().nullish(),
      maxExtraBeds: z.number().nullish(),
      maxOccupancy: z.number().nullish(),
    })
    .transform((data) => ({
      allow_cribs_and_extra_beds: data['allowCribsAndExtraBeds'],
      max_adults: data['maxAdults'],
      max_children: data['maxChildren'],
      max_cribs: data['maxCribs'],
      max_extra_beds: data['maxExtraBeds'],
      max_occupancy: data['maxOccupancy'],
    }));
});
