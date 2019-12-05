# Welcome to xlsx-maker 👋
[![Version](https://img.shields.io/npm/v/xlsx-maker.svg)](https://www.npmjs.com/package/xlsx-maker)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

### 🏠 [Homepage](https://github.com/zjcrender/xlsx-maker)

## Install

```sh
npm install xlsx-maker
```

## Usage
```javascript
import json2xlsx from "xlsx-maker";

const mock = [
  {name: 'Alice', age: 16, gender: 'female', score: 95},
  {name: 'Bob', age: 18, gender: 'male', score: 83},
  // ...
]

json2xlsx({
  filename: 'example',
  data: mock,
  headers: ['name', 'age', 'gender', 'score', 'grade'],
  format: {
    grade: (row, key) => row.score > 90 ? 'A' : 'B' // just a example
  }
})
```

this will make `example.xlsx`

| | A | B | C | D | E |
|----|----|----|----|----|----|
| 1 | name | age | gender | score | grade |
| 2 | Alice | 16 | female | 95 | A |
| 3 | Bob | 18 | male | 83 | B |
| 4 | ... |


## Author

👤 **render**

* Github: [@zjcrender](https://github.com/zjcrender)

