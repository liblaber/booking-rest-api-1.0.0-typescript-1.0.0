import { ReviewScoresInputDto, reviewScoresInputDto } from './models/review-scores-input-dto';
import { GetHotelsReviewScoresAccept, getHotelsReviewScoresAccept } from './models/get-hotels-review-scores-accept';
import { HotelsInputDto, hotelsInputDto } from './models/hotels-input-dto';
import { GetHotelsAccept, getHotelsAccept } from './models/get-hotels-accept';
import { HotelTypeInputDto, hotelTypeInputDto } from './models/hotel-type-input-dto';
import { GetHotelTypesAccept, getHotelTypesAccept } from './models/get-hotel-types-accept';
import { HotelThemeTypeInputDto, hotelThemeTypeInputDto } from './models/hotel-theme-type-input-dto';
import { GetHotelThemeTypesAccept, getHotelThemeTypesAccept } from './models/get-hotel-theme-types-accept';
import { HotelFacilityInputDto, hotelFacilityInputDto } from './models/hotel-facility-input-dto';
import { GetRoomFacilityTypesAccept, getRoomFacilityTypesAccept } from './models/get-room-facility-types-accept';
import { HotelAvailabilityInputDto, hotelAvailabilityInputDto } from './models/hotel-availability-input-dto';
import { GetHotelAvailabilityAccept, getHotelAvailabilityAccept } from './models/get-hotel-availability-accept';
import { BlockAvailabilityInputDto, blockAvailabilityInputDto } from './models/block-availability-input-dto';
import { GetBlockAvailabilityAccept, getBlockAvailabilityAccept } from './models/get-block-availability-accept';

export interface GetHotelsReviewScoresParams {
  reviewScoresInputDto: ReviewScoresInputDto;
  accept?: GetHotelsReviewScoresAccept;
}

export interface GetHotelsParams {
  hotelsInput: HotelsInputDto;
  accept?: GetHotelsAccept;
}

export interface GetHotelTypesParams {
  hotelTypeInputDto: HotelTypeInputDto;
  accept?: GetHotelTypesAccept;
}

export interface GetHotelThemeTypesParams {
  hotelThemeTypeInputDto: HotelThemeTypeInputDto;
  accept?: GetHotelThemeTypesAccept;
}

export interface GetRoomFacilityTypesParams {
  hotelFacilityInputDto: HotelFacilityInputDto;
  accept?: GetRoomFacilityTypesAccept;
}

export interface GetHotelAvailabilityParams {
  hotelAvailabilityInputDto: HotelAvailabilityInputDto;
  accept?: GetHotelAvailabilityAccept;
}

export interface GetBlockAvailabilityParams {
  blockInput: BlockAvailabilityInputDto;
  accept?: GetBlockAvailabilityAccept;
}
