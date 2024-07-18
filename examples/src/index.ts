import { BookerInputDto, Booking, Coordinates, GuestsInputDto, SearchInputDto } from 'booking';

(async () => {
  const booking = new Booking({
    token: 'YOUR_TOKEN',
  });

  const accept = SearchAccept.application / json;

  const platform = Platform.ANDROID;

  const travelPurpose = TravelPurpose.BUSINESS;

  const userGroups = UserGroups.AUTHENTICATED;

  const bookerInputDto: BookerInputDto = {
    country: 'gv',
    platform: platform,
    travelPurpose: travelPurpose,
    userGroups: [userGroups],
  };

  const allocationInputDto: AllocationInputDto = {
    children: [11],
    numberOfAdults: 7,
  };

  const guestsInputDto: GuestsInputDto = {
    numberOfAdults: 2,
    numberOfRooms: 3,
    allocation: [allocationInputDto],
    children: [3],
  };

  const searchInputDtoExtras = SearchInputDtoExtras.EXTRA_CHARGES;

  const coordinates: Coordinates = {
    latitude: 7.91,
    longitude: 8.76,
    radius: 4.68,
  };

  const input: SearchInputDto = {
    checkin: 'checkin',
    checkout: 'checkout',
    booker: bookerInputDto,
    currency: 'EUR',
    city: 8,
    country: 'nl',
    guests: guestsInputDto,
    extras: [searchInputDtoExtras],
    accommodations: [2],
    accommodationFacilities: [8],
    roomFacilities: [1],
    accommodationTypes: [3],
    brands: [8],
    airport: 'AMS',
    district: 4,
    landmark: 7,
    coordinates: coordinates,
    region: 9,
    rows: 875,
    page: 'page',
  };

  const { data } = await booking.demandApiV3Compatible.search(input, {
    accept: accept,
  });

  console.log(data);
})();
