import { Enum } from "../src/Enum";

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