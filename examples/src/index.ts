import { BookerInputDto, BookingClient, Coordinates, GuestsInputDto, SearchInputDto } from 'booking_client';

(async () => {
  const bookingClient = new BookingClient({
    token: 'YOUR_TOKEN',
  });

  const accept = SearchAccept.application / json;

  const platform = Platform.ANDROID;

  const travelPurpose = TravelPurpose.BUSINESS;

  const userGroups = UserGroups.AUTHENTICATED;

  const bookerInputDto: BookerInputDto = {
    country: 'bs',
    platform: platform,
    travelPurpose: travelPurpose,
    userGroups: [userGroups],
  };

  const allocationInputDto: AllocationInputDto = {
    children: [3],
    numberOfAdults: 10,
  };

  const guestsInputDto: GuestsInputDto = {
    numberOfAdults: 1,
    numberOfRooms: 8,
    allocation: [allocationInputDto],
    children: [14],
  };

  const searchInputDtoExtras = SearchInputDtoExtras.EXTRA_CHARGES;

  const coordinates: Coordinates = {
    latitude: 6.5,
    longitude: 1.32,
    radius: 7.15,
  };

  const input: SearchInputDto = {
    checkin: 'checkin',
    checkout: 'checkout',
    booker: bookerInputDto,
    currency: 'EUR',
    city: 10,
    country: 'nl',
    guests: guestsInputDto,
    extras: [searchInputDtoExtras],
    accommodations: [7],
    accommodationFacilities: [7],
    roomFacilities: [8],
    accommodationTypes: [6],
    brands: [10],
    airport: 'AMS',
    district: 2,
    landmark: 10,
    coordinates: coordinates,
    region: 9,
    rows: 211,
    page: 'page',
  };

  const { data } = await bookingClient.demandApiV3Compatible.search(input, {
    accept: accept,
  });

  console.log(data);
})();
