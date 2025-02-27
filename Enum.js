/**
 * Enum like class.
 * @example
 * const Week = new Enum(
 *   "MON",
 *   "TUE",
 *   "WED",
 *   "THU",
 *   "FRI",
 *   "SAT",
 *   "SUN"
 * );
 * console.log(Week.MON);
 * >>> 0
 * console.log(Week.THU);
 * >>> 3
 *
 * const Fruits = new Enum(
 *   "APPLE",
 *   ["ORANGE", 10],
 *   "BANANA",
 *   ["MELON", "sweet"]
 * );
 * console.log(Fruits.ORANGE);
 * >>> 10
 * console.log(Fruits.BANANA);
 * >>> 2
 * console.log(Fruits.MELON);
 * >>> "sweet"
 */
class Enum {
    constructor(...args) {
        args.forEach((v, i) => {
            Array.isArray(v)
                ? this[v[0]] = v[1]
                : this[v] = i;
        });
    }

    valueOf(name) {
        return this[name];
    }

    values() {
        return Object.values(this);
    }
}

module.exports = Enum;
