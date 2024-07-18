import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const hotelPhotoDto: any = z.lazy(() => {
  return z.object({
    mainPhoto: z.boolean().optional(),
    urlOriginal: z.string().optional(),
  });
});

/**
 * Photos specific information of the hotel.
 * @typedef  {HotelPhotoDto} hotelPhotoDto - Photos specific information of the hotel. - Photos specific information of the hotel.
 * @property {boolean} - Is this the main hotel photo.
 * @property {string} - Url of the photo with max width of 500 pixels.
 */
export type HotelPhotoDto = z.infer<typeof hotelPhotoDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const hotelPhotoDtoResponse: any = z.lazy(() => {
  return z
    .object({
      main_photo: z.boolean().optional(),
      url_original: z.string().optional(),
    })
    .transform((data) => ({
      mainPhoto: data['main_photo'],
      urlOriginal: data['url_original'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const hotelPhotoDtoRequest: any = z.lazy(() => {
  return z.object({ mainPhoto: z.boolean().nullish(), urlOriginal: z.string().nullish() }).transform((data) => ({
    main_photo: data['mainPhoto'],
    url_original: data['urlOriginal'],
  }));
});
