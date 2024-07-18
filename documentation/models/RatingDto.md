# RatingDto

**Properties**

| Name            | Type      | Required | Description                                                                                                    |
| :-------------- | :-------- | :------- | :------------------------------------------------------------------------------------------------------------- |
| numberOfReviews | number    | ❌       | Number of validated reviews for this accommodation.                                                            |
| preferred       | boolean   | ❌       | Boolean value is "true" if this accommodation is in the Booking.com's preferred program and "false" otherwise. |
| reviewScore     | number    | ❌       | A decimal number indicating the current review score of this accommodation property, in the range 1..10.       |
| stars           | number    | ❌       | Number of stars of this accommodation property.                                                                |
| starsType       | StarsType | ❌       | An enumerated value describing which type of stars this accommodation has.                                     |

# StarsType

An enumerated value describing which type of stars this accommodation has.

**Properties**

| Name                       | Type   | Required | Description                  |
| :------------------------- | :----- | :------- | :--------------------------- |
| ESTIMATED_BY_ACCOMMODATION | string | ✅       | "ESTIMATED_BY_ACCOMMODATION" |
| ESTIMATED_BY_BOOKING       | string | ✅       | "ESTIMATED_BY_BOOKING"       |
| OFFICIAL                   | string | ✅       | "OFFICIAL"                   |
