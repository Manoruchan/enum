import { Enum } from "../src/Enum";

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