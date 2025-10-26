import { Enum, EnumValue } from "../src/Enum";

class EWeek extends Enum {
    public isWeekend(day: EnumValue): boolean {
        return day === this.SAT || day === this.SUN;
    }
}

const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"] as const;
const week = EWeek.create(days);

console.log(week.isWeekend(week.SUN)); // true
console.log(week.isWeekend(week.TUE)); // false