# DescriptionDto

Textual information about the accommodation. Requires `{"extras":["description"]}`.

**Properties**

| Name                 | Type                   | Required | Description                                                                                                                                                      |
| :------------------- | :--------------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| importantInformation | TranslationInformation | ❌       | Text containing important information about the property. The value is translated in the requested languages.                                                    |
| licenseNumbers       | string[]               | ❌       | List of all the license numbers of this accommodation property.                                                                                                  |
| text                 | TruncatedString        | ❌       | The translated description text of this accommodation property in the requested languages. The maximum number of characters returned may be limited by contract. |
