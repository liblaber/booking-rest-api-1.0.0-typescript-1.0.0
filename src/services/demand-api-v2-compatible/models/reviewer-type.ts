import { z } from 'zod';

export const reviewerType = z.enum([
  'SOLO_TRAVELLER',
  'YOUNG_COUPLE',
  'MATURE_COUPLE',
  'FAMILY_WITH_YOUNG_CHILDREN',
  'FAMILY_WITH_OLDER_CHILDREN',
  'WITH_FRIENDS',
  'GROUP',
  'REVIEW_CATEGORY_COUPLES',
  'REVIEW_CATEGORY_FAMILIES',
  'REVIEW_CATEGORY_GROUP_OF_FRIENDS',
  'REVIEW_CATEGORY_BUSINESS_TRAVELLERS',
]);

export type ReviewerType = z.infer<typeof reviewerType>;
