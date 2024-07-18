# BedOptionDto

Lists all possible bedding options for this room or apartment.

**Properties**

| Name              | Type                  | Required | Description                                                                                  |
| :---------------- | :-------------------- | :------- | :------------------------------------------------------------------------------------------- |
| bedConfigurations | BedConfigurationDto[] | ❌       | Lists all alternative bed configurations that are supported.                                 |
| hasBathroom       | boolean               | ❌       | Flags if this area includes its own bathroom.                                                |
| isBedroom         | boolean               | ❌       | Flags if this area is marked as a bedroom, otherwise, it should be considered a living room. |
