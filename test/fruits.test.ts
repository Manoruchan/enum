import { Enum } from "../src/Enum";

const Fruits = new Enum(
    ["APPLE", "red"],
    ["ORANGE", "orange"],
    ["BANANA", "yellow"]
);

console.log(Fruits.APPLE);             // red
console.log(Fruits.valueOf("ORANGE")); // 'orange'
console.log(Fruits.get("yellow"));     // 'BANANA'
console.log(Fruits.values());          // [ 'red', 'orange', 'yellow' ]