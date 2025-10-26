export type EnumValue = string | number | boolean;

type EnumKeysType<T extends readonly string[]> = {
    [K in T[number]]: number;
}

const isRecord = <U extends Record<string, EnumValue>>(v: any): v is U => {
    return typeof v === "object" && v !== null && !Array.isArray(v);
}

export class Enum<T extends (readonly string[] | Record<string, EnumValue>) = readonly string[]> {
    readonly [key: string]: any;
    private _reversed: Map<EnumValue, string>;

    public constructor(v: T) {
        this._reversed = new Map();
        let resolved: Record<string, EnumValue>;

        if (Array.isArray(v)) {
            resolved = {};
            v.forEach((k, i) => resolved[k] = i);
        } else if (isRecord(v)) {
            resolved = v;
        } else {
            throw new TypeError("Invalid argument type");
        }

        Object.entries(resolved).forEach(([k, v]) => {
            (this as any)[k] = v as T[keyof T];
            this._reversed.set(v, k);
        });

        Object.freeze(this); // make properties constant
    }

    public static create<T extends readonly string[], C extends Enum<any>>(
        this: new (v: T) => C,
        v: T
    ): C & EnumKeysType<T>;
    public static create<T extends Record<string, EnumValue>, C extends Enum<any>>(
        this: new (v: T) => C,
        v: T
    ): C & T;
    public static create<T extends (readonly string[] | Record<string, EnumValue>), C extends Enum<any>>(
        this: new (v: T) => C,
        v: T
    ): C & EnumKeysType<any> {
        const instance = new this(v);
        return instance as any;
    }

    /**
     * Obtains the name associated with the enum value.
     * @param value The enum value.
     * @returns The name of the enum constant, or undefined if not found.
     */
    public get(value: EnumValue): string | undefined {
        return this._reversed.get(value);
    }

    /**
     * Obtains the enum value from its name.
     * @param name The name of enum value
     * @returns The enum constant, or undefined if not found.
     */
    public valueOf(name: string): EnumValue | undefined {
        return this[name];
    }

    /**
     * @returns The array of enum values.
     */
    public values(): EnumValue[] {
        return Object.values(this).filter(v => typeof v === "string" || typeof v === "number" || typeof v === "boolean");
    }

    /**
     * @returns The array of the name of enum values.
     */
    public names(): string[] {
        return Object.keys(this).filter(k => k !== "_reversed");
    }

    /**
     * @returns The entries of names and values.
     */
    public toArray(): ([string, EnumValue])[] {
        return this.names().map(k => [k, this[k]]);
    }
}