import { Enum, EnumValue } from "../src/Enum";

class Weekdays extends Enum<string[]> {
    public isWeekend(day: EnumValue): boolean {
        return day === this.SAT || day === this.SUN;
    }
}

const days: string[] = [
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT",
    "SUN"
];

const week = new Weekdays(...days);

console.log(week.isWeekend(week.SUN)); // true
console.log(week.isWeekend(week.TUE)); // false