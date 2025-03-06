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
