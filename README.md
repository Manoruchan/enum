# Enum

A simple and flexible Enum class for JavaScript / TypeScript.


`@manoruchan/enum` is an Enum class implementation

that keeps your values as **constant variable** after its instantiation

and lets you **extend** them with your own methods.

## Why use this instead of the native enum?

Because `@manoruchan/enum` lets you define your own methods and supports **dynamic enums**

just like Java's `Enum` class but simpler and more flexible for JavaScript / TypeScript.

# Installation

```bash
npm install @manoruchan/enum
```

# Usage

## Basic Usage

```ts
import { Enum } from "@manoruchan/enum";

const Week = new Enum(
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT",
    "SUN"
);

console.log(Week.MON);            // 0
console.log(Week.valueOf("MON")); // 0
console.log(Week.get(0));         // MON
console.log(Week.values());       // [ 0, 1, 2, 3, 4, 5, 6 ]
```

## With Custom Values

```ts
import { Enum } from "@manoruchan/enum";

const Fruits = new Enum(
    ["APPLE", "red"],
    ["ORANGE", "orange"],
    ["BANANA", "yellow"]
);

console.log(Fruits.APPLE);             // red
console.log(Fruits.valueOf("ORANGE")); // orange
console.log(Fruits.get("yellow"));     // BANANA
console.log(Fruits.values());          // [ 'red', 'orange', 'yellow' ]
```

## Enum With Operations

```ts
import { Enum, EnumValue } from "@manoruchan/enum";

class Week extends Enum<string[]> {
    public isWeekend(day: EnumValue): boolean {
        return day === this.SAT || day === this.SUN;
    }
}

const days: string[] = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const week = new Week(...days);

console.log(week.isWeekend(week.SUN)); // true
console.log(week.isWeekend(week.TUE)); // false
```

# LICENSE
[MIT](https://github.com/Manoruchan/enum/blob/main/LICENSE)
