# ScoreBreakdown

A breakdown of scores per reviewer type and review question.

**Properties**

| Name         | Type          | Required | Description                                  |
| :----------- | :------------ | :------- | :------------------------------------------- |
| averageScore | number        | ❌       | Average score from this reviewer type.       |
| count        | number        | ❌       | Number of responses from this reviewer type. |
| question     | QuestionDto[] | ❌       | Review scores per question.                  |
| reviewerType | string        | ❌       | Reviewer type.                               |
