import { z } from 'zod';

export const roomDtoAttributes = z.enum(['NON_SMOKING', 'WORK_FRIENDLY']);

export type RoomDtoAttributes = z.infer<typeof roomDtoAttributes>;
