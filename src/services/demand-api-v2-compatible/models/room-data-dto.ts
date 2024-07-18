import { z } from 'zod';
import { roomInfoDto, roomInfoDtoRequest, roomInfoDtoResponse } from './room-info-dto';

/**
 * The shape of the model inside the application code - what the users use
 */
export const roomDataDto: any = z.lazy(() => {
  return z.object({
    roomId: z.number().optional(),
    roomInfo: roomInfoDto.optional(),
  });
});

/**
 * This block has room data for this hotel.
 * @typedef  {RoomDataDto} roomDataDto - This block has room data for this hotel. - This block has room data for this hotel.
 * @property {number}
 * @property {RoomInfoDto}
 */
export type RoomDataDto = z.infer<typeof roomDataDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const roomDataDtoResponse: any = z.lazy(() => {
  return z
    .object({
      room_id: z.number().optional(),
      room_info: roomInfoDtoResponse.optional(),
    })
    .transform((data) => ({
      roomId: data['room_id'],
      roomInfo: data['room_info'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const roomDataDtoRequest: any = z.lazy(() => {
  return z.object({ roomId: z.number().nullish(), roomInfo: roomInfoDtoRequest.nullish() }).transform((data) => ({
    room_id: data['roomId'],
    room_info: data['roomInfo'],
  }));
});
