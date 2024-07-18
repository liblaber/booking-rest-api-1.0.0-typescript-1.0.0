import { z } from 'zod';

export const hotelAvailabilityInputDtoUserPlatform = z.enum(['ANDROID', 'DESKTOP', 'IOS', 'MOBILE', 'TABLET']);

export type HotelAvailabilityInputDtoUserPlatform = z.infer<typeof hotelAvailabilityInputDtoUserPlatform>;
