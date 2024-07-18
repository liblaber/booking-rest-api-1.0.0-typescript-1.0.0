import { z } from 'zod';
import { bedroomDto, bedroomDtoRequest, bedroomDtoResponse } from './bedroom-dto';
import { roomOccupancyDto, roomOccupancyDtoRequest, roomOccupancyDtoResponse } from './room-occupancy-dto';
import { roomSizeDto, roomSizeDtoRequest, roomSizeDtoResponse } from './room-size-dto';

/**
 * The shape of the model inside the application code - what the users use
 */
export const roomInfoDto: any = z.lazy(() => {
  return z.object({
    bathroomCount: z.number().optional(),
    bedroomCount: z.number().optional(),
    bedrooms: z.array(bedroomDto).optional(),
    occupancy: roomOccupancyDto.optional(),
    roomSize: roomSizeDto.optional(),
    roomTypeId: z.number().optional(),
  });
});

/**
 *
 * @typedef  {RoomInfoDto} roomInfoDto
 * @property {number}
 * @property {number}
 * @property {BedroomDto[]}
 * @property {RoomOccupancyDto}
 * @property {RoomSizeDto}
 * @property {number}
 */
export type RoomInfoDto = z.infer<typeof roomInfoDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const roomInfoDtoResponse: any = z.lazy(() => {
  return z
    .object({
      bathroom_count: z.number().optional(),
      bedroom_count: z.number().optional(),
      bedrooms: z.array(bedroomDtoResponse).optional(),
      occupancy: roomOccupancyDtoResponse.optional(),
      room_size: roomSizeDtoResponse.optional(),
      room_type_id: z.number().optional(),
    })
    .transform((data) => ({
      bathroomCount: data['bathroom_count'],
      bedroomCount: data['bedroom_count'],
      bedrooms: data['bedrooms'],
      occupancy: data['occupancy'],
      roomSize: data['room_size'],
      roomTypeId: data['room_type_id'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const roomInfoDtoRequest: any = z.lazy(() => {
  return z
    .object({
      bathroomCount: z.number().nullish(),
      bedroomCount: z.number().nullish(),
      bedrooms: z.array(bedroomDtoRequest).nullish(),
      occupancy: roomOccupancyDtoRequest.nullish(),
      roomSize: roomSizeDtoRequest.nullish(),
      roomTypeId: z.number().nullish(),
    })
    .transform((data) => ({
      bathroom_count: data['bathroomCount'],
      bedroom_count: data['bedroomCount'],
      bedrooms: data['bedrooms'],
      occupancy: data['occupancy'],
      room_size: data['roomSize'],
      room_type_id: data['roomTypeId'],
    }));
});
