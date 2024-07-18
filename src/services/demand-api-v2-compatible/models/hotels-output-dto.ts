import { z } from 'zod';
import { hotelDataDto, hotelDataDtoRequest, hotelDataDtoResponse } from './hotel-data-dto';
import { roomDataDto, roomDataDtoRequest, roomDataDtoResponse } from './room-data-dto';

/**
 * The shape of the model inside the application code - what the users use
 */
export const hotelsOutputDto: any = z.lazy(() => {
  return z.object({
    hotelData: hotelDataDto.optional(),
    hotelId: z.number().optional(),
    roomData: z.array(roomDataDto).optional(),
  });
});

/**
 *
 * @typedef  {HotelsOutputDto} hotelsOutputDto
 * @property {HotelDataDto} - Hotel specific information.
 * @property {number} - Unique ID to represent this hotel.
 * @property {RoomDataDto[]} - This block has room data for this hotel.
 */
export type HotelsOutputDto = z.infer<typeof hotelsOutputDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const hotelsOutputDtoResponse: any = z.lazy(() => {
  return z
    .object({
      hotel_data: hotelDataDtoResponse.optional(),
      hotel_id: z.number().optional(),
      room_data: z.array(roomDataDtoResponse).optional(),
    })
    .transform((data) => ({
      hotelData: data['hotel_data'],
      hotelId: data['hotel_id'],
      roomData: data['room_data'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const hotelsOutputDtoRequest: any = z.lazy(() => {
  return z
    .object({
      hotelData: hotelDataDtoRequest.nullish(),
      hotelId: z.number().nullish(),
      roomData: z.array(roomDataDtoRequest).nullish(),
    })
    .transform((data) => ({
      hotel_data: data['hotelData'],
      hotel_id: data['hotelId'],
      room_data: data['roomData'],
    }));
});
