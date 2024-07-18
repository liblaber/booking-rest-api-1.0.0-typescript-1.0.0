import { SearchAccept, searchAccept } from './models/search-accept';
import { PostDetailsAccept, postDetailsAccept } from './models/post-details-accept';
import {
  GetAccommodationConstantsAccept,
  getAccommodationConstantsAccept,
} from './models/get-accommodation-constants-accept';

export interface SearchParams {
  accept?: SearchAccept;
}

export interface PostDetailsParams {
  accept?: PostDetailsAccept;
}

export interface GetAccommodationConstantsParams {
  accept?: GetAccommodationConstantsAccept;
}
