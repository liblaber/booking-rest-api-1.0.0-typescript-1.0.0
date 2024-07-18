import { z } from 'zod';

export const blockAvailabilityInputDtoUserPlatform = z.enum(['ANDROID', 'DESKTOP', 'IOS', 'MOBILE', 'TABLET']);

export type BlockAvailabilityInputDtoUserPlatform = z.infer<typeof blockAvailabilityInputDtoUserPlatform>;
