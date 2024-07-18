import { z } from 'zod';

export const platform = z.enum(['ANDROID', 'DESKTOP', 'IOS', 'MOBILE', 'TABLET']);

export type Platform = z.infer<typeof platform>;
