# Enum

A simple and flexible Enum class for JavaScript / TypeScript.


`@manoruchan/enum` is an Enum class implementation

that maintains your values as **constant variable** after its instantiation

and supports **extension** with your own methods.

## Why use this instead of the native enum?

Because `@manoruchan/enum` offers custom method definition and supports **dynamic enums**,

just like Java's `Enum` class but simpler and more flexible for JavaScript / TypeScript.

Furthermore, `@manoruchan/enum` now supports **full type inference and autocomplete** via the new **`Enum.create()`** static factory method.


# Installation

```bash
npm install @manoruchan/enum
```

# Usage

## Basic Usage

```ts
import { Enum } from "@manoruchan/enum";

const Color = Enum.create([
    "RED",
    "GREEN",
    "BLUE"
] as const);

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

const Fruits = Enum.create({
    APPLE: "red",
    ORANGE: "orange",
    BANANA: "yellow"
});

console.log(Fruits.APPLE);             // red
console.log(Fruits.valueOf("ORANGE")); // 'orange'
console.log(Fruits.get("yellow"));     // 'BANANA'
console.log(Fruits.values());          // [ 'red', 'orange', 'yellow' ]
```

## Enum With Operations

```ts
import { Enum, EnumValue } from "@manoruchan/enum";

class Week extends Enum {
    public isWeekend(day: EnumValue): boolean {
        return day === this.SAT || day === this.SUN;
    }
}

const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"] as const;
const week = Week.create(days);

console.log(week.isWeekend(week.SUN)); // true
console.log(week.isWeekend(week.TUE)); // false
```

```ts
class HttpCode extends Enum<Record<string, number>> {
    public isError(value: number): boolean {
        return value >= 400;
    }

    public isClientError(value: number): boolean {
        return this.BAD_REQUEST <= value && value < this.INTERNAL_SERVER_ERROR;
    }
}

const codes = {
    OK: 200,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
} as const;

const http = HttpCode.create(codes);

console.log(http.isClientError(http.NOT_FOUND)); // true
console.log(http.isError(http.OK)); // false
```

## Important Note on Autocomplete

To ensure proper type inference for array input to constructor, the argument must be annotated with **`as const`**.

### Example (Array Input with Autocomplete)

 ```ts
// `as const` is required here
const Status= Enum.create(["ACTIVE", "INACTIVE"] as const);

console.log(Status.ACTIVE); // 0
// without `as const`, autocomplete is not available for Status.ACTIVE
```

### Example (Object Input with Autocomplete)
```ts
// as const is not required here, but recommended.
const Fruits = Enum.create({
    APPLE: "red",
    ORANGE: "orange",
    BANANA: "yellow"
});
// } as const);

console.log(Fruits.APPLE); // red
```

## EnumValue
```ts
type EnumValue = string | number | boolean;
```
EnumValue accepts primitive types.

# API
``static create(v: readonly string[] | Record<string, EnumValue>): Enum``
Creates a type-safe Enum instance. The return type provides full autocomplete based on the input `v`.

``get(value: EnumValue): string | undefined``
Obtains the name associated with the enum value.

``valueOf(name: string): EnumValue | undefined``
Obtains the enum value from its name.

``values(): EnumValue[]``
Returns the array of enum values.

``names(): string[]``
Returns the array of the name of enum values.

``toArray(): [string, EnumValue][]``
Returns the entries of names and values.

# LICENSE
[MIT](https://github.com/Manoruchan/enum/blob/main/LICENSE)
