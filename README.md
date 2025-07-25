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

const Color = new Enum(
    "RED",
    "GREEN",
    "BLUE"
);

console.log(Color.RED);            // 0
console.log(Color.valueOf("RED")); // 0
console.log(Color.get(0));         // 'RED'
console.log(Color.values());       // [ 0, 1, 2 ]
console.log(Color.names());        // [ 'RED', 'GREEN', 'BLUE' ]
console.log(Color.toArray());      // [ [ 'RED', 0 ], [ 'GREEN', 1 ], [ 'BLUE', 2 ] ]
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
console.log(Fruits.valueOf("ORANGE")); // 'orange'
console.log(Fruits.get("yellow"));     // 'BANANA'
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
```ts
import { Enum, EnumValue } from "@manoruchan/enum";

class Week extends Enum<string[]> {
    public constructor() {
        super("MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN");
    }

    public isWeekend(day: EnumValue): boolean {
        return day === this.SAT || day === this.SUN;
    }
}

const week = new Week();

console.log(week.isWeekend(week.SUN)); // true
console.log(week.isWeekend(week.TUE)); // false
```

## EnumValue
```ts
type EnumValue = string | number | boolean;
```
EnumValue accepts primitive types.

# API
``get(value: EnumValue): string | undefined``
Obtains the name associated with the enum value.

``valueOf(name: string): EnumValue | undefined``
Obtains the enum value from its name.

``values(): EnumValue[]``
Returns the array of enum values.

``names(): string[]``
Returns the array of the name of enum values.

``toArray(): ([string, EnumValue])[]``
Returns the entries of names and values.

# LICENSE
[MIT](https://github.com/Manoruchan/enum/blob/main/LICENSE)
