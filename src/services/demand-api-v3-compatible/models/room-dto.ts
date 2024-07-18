import { z } from 'zod';
import { translatedString, translatedStringRequest, translatedStringResponse } from './translated-string';
import { roomDtoAttributes } from './room-dto-attributes';
import { bedOptionDto, bedOptionDtoRequest, bedOptionDtoResponse } from './bed-option-dto';
import {
  cribsAndExtraBedsDto,
  cribsAndExtraBedsDtoRequest,
  cribsAndExtraBedsDtoResponse,
} from './cribs-and-extra-beds-dto';
import {
  roomMaximumOccupancyDto,
  roomMaximumOccupancyDtoRequest,
  roomMaximumOccupancyDtoResponse,
} from './room-maximum-occupancy-dto';
import { numberOfRoomsDto, numberOfRoomsDtoRequest, numberOfRoomsDtoResponse } from './number-of-rooms-dto';

/**
 * The shape of the model inside the application code - what the users use
 */
export const roomDto: any = z.lazy(() => {
  return z.object({
    id: z.number().optional(),
    name: translatedString.optional(),
    attributes: z.array(roomDtoAttributes).optional(),
    bedOptions: z.array(bedOptionDto).optional(),
    cribsAndExtraBeds: cribsAndExtraBedsDto.optional(),
    description: translatedString.optional(),
    facilities: z.array(z.number()).optional(),
    maximumOccupancy: roomMaximumOccupancyDto.optional(),
    numberOfRooms: numberOfRoomsDto.optional(),
    roomType: z.number().optional(),
    size: z.number().optional(),
  });
});

/**
 * The list of room types available at this property. Requires `{"extras":["rooms"]}`.
 * @typedef  {RoomDto} roomDto - The list of room types available at this property. Requires `{"extras":["rooms"]}`. - The list of room types available at this property. Requires `{"extras":["rooms"]}`.
 * @property {number} - A signed integer number that uniquely identifies an accommodation property room.
 * @property {TranslatedString} - Translated description of this room. The maximum number of characters returned may be limited by contract.
 * @property {RoomDtoAttributes[]} - Lists a set of attribute qualifiers for this room. Will not be returned if no relevant attributes are applicable.
 * @property {BedOptionDto[]} - Lists all possible bedding options for this room or apartment.
 * @property {CribsAndExtraBedsDto} - Lists room options regarding adding cribs and/or extra beds.
 * @property {TranslatedString} - Translated description of this room. The maximum number of characters returned may be limited by contract.
 * @property {number[]} - A signed integer number that uniquely identifies an accommodation property room facility.
Examples of facilities are: Coffee/Tea maker, TV, Airconditioning, etc.
 * @property {RoomMaximumOccupancyDto} - Occupancy limits and options.
 * @property {NumberOfRoomsDto} - Total rooms available.
 * @property {number} - A signed integer number that uniquely identifies an accommodation property room type.
Example of room types are: Suite, Apartment, Twin/Double etc.

 * @property {number} - The room area in square meters.
 */
export type RoomDto = z.infer<typeof roomDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const roomDtoResponse: any = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      name: translatedStringResponse.optional(),
      attributes: z.array(roomDtoAttributes).optional(),
      bed_options: z.array(bedOptionDtoResponse).optional(),
      cribs_and_extra_beds: cribsAndExtraBedsDtoResponse.optional(),
      description: translatedStringResponse.optional(),
      facilities: z.array(z.number()).optional(),
      maximum_occupancy: roomMaximumOccupancyDtoResponse.optional(),
      number_of_rooms: numberOfRoomsDtoResponse.optional(),
      room_type: z.number().optional(),
      size: z.number().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      attributes: data['attributes'],
      bedOptions: data['bed_options'],
      cribsAndExtraBeds: data['cribs_and_extra_beds'],
      description: data['description'],
      facilities: data['facilities'],
      maximumOccupancy: data['maximum_occupancy'],
      numberOfRooms: data['number_of_rooms'],
      roomType: data['room_type'],
      size: data['size'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const roomDtoRequest: any = z.lazy(() => {
  return z
    .object({
      id: z.number().nullish(),
      name: translatedStringRequest.nullish(),
      attributes: z.array(roomDtoAttributes).nullish(),
      bedOptions: z.array(bedOptionDtoRequest).nullish(),
      cribsAndExtraBeds: cribsAndExtraBedsDtoRequest.nullish(),
      description: translatedStringRequest.nullish(),
      facilities: z.array(z.number()).nullish(),
      maximumOccupancy: roomMaximumOccupancyDtoRequest.nullish(),
      numberOfRooms: numberOfRoomsDtoRequest.nullish(),
      roomType: z.number().nullish(),
      size: z.number().nullish(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      attributes: data['attributes'],
      bed_options: data['bedOptions'],
      cribs_and_extra_beds: data['cribsAndExtraBeds'],
      description: data['description'],
      facilities: data['facilities'],
      maximum_occupancy: data['maximumOccupancy'],
      number_of_rooms: data['numberOfRooms'],
      room_type: data['roomType'],
      size: data['size'],
    }));
});
