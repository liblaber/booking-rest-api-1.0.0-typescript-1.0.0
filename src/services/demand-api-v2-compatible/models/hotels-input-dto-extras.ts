import { z } from 'zod';

export const hotelsInputDtoExtras = z.enum([
  'HOTEL_INFO',
  'ROOM_INFO',
  'KEY_COLLECTION_INFO',
  'HOTEL_FACILITIES',
  'HOTEL_PHOTOS',
  'HOTEL_DESCRIPTION',
]);

export type HotelsInputDtoExtras = z.infer<typeof hotelsInputDtoExtras>;
