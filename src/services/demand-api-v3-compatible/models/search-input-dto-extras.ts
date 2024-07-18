import { z } from 'zod';

export const searchInputDtoExtras = z.enum(['EXTRA_CHARGES', 'PRODUCTS']);

export type SearchInputDtoExtras = z.infer<typeof searchInputDtoExtras>;
