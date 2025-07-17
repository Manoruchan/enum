export type EnumValue = string | number | boolean;

export interface EnumParams {
    [key: string]: EnumValue;
}

export class Enum<T extends readonly (string | [string, EnumValue])[]> implements EnumParams {
    [key: string]: any;
    private reverse: Map<EnumValue, string>;

    public constructor(...args: T) {
        this.reverse = new Map();

        args.forEach((v, i) => {
            if (Array.isArray(v)) {
                this[v[0]] = v[1];
                this.reverse.set(v[1], v[0]);
            } else {
                this[v] = i;
                this.reverse.set(i, v);
            }
        });

        Object.freeze(this);
    }

    public get(value: EnumValue): string | undefined {
        return this.reverse.get(value);
    }

    public valueOf(name: string): EnumValue {
        return this[name];
    }

    public values(): EnumValue[] {
        return Object.values(this).filter(v => typeof v === "string" || typeof v === "number" || typeof v === "boolean");
    }
}