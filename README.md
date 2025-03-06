# Enum
Simple enum class for JavaScript

# Installation
Copy and paste [Enum.js](https://github.com/Manoruchan/enum/blob/main/Enum.js) into your project.

# Usage
Basic usage
```js
const Week = new Enum(
  "MON",
  "TUE",
  "WED",
  "THU",
  "FRI",
  "SAT",
  "SUN"
);

console.log(Week.MON);
// 0
console.log(Week.THU);
// 3
```

Specify values
```js
const Fruits = new Enum(
  ["APPLE", "red"],
  ["ORANGE", "orange"],
  ["BANANA", "yellow"],
  ["MELON", "green"]
);

console.log(Fruits.APPLE);
// red
console.log(Fruits.BANANA);
// yellow
```

# LICENSE
[MIT](https://github.com/Manoruchan/enum/blob/main/LICENSE)
