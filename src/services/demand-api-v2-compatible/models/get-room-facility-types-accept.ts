import { z } from 'zod';

export const getRoomFacilityTypesAccept = z.enum(['application/json']);

export type GetRoomFacilityTypesAccept = z.infer<typeof getRoomFacilityTypesAccept>;
