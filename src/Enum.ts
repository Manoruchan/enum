export type EnumValue = string | number | boolean;

export interface EnumParams {
    [key: string]: EnumValue;
}

export class Enum<T extends readonly (string | [string, EnumValue])[]> implements EnumParams {
    [key: string]: any;
    private _reversed: Map<EnumValue, string>;

    /**
     * @example
     * const Color = new Enum("RED", "GREEN", "BLUE"); // Color.RED === 0, Color.GREEN === 1
     * @example
     * const Status = new Enum(["SUCCESS", 200], ["BAD_REQUEST", 400]); // Status.SUCCESS === 200
     */
    public constructor(...args: T) {
        this._reversed = new Map();

        args.forEach((v, i) => {
            if (Array.isArray(v)) {
                this[v[0]] = v[1];
                this._reversed.set(v[1], v[0]);
            } else {
                this[v] = i;
                this._reversed.set(i, v);
            }
        });

        Object.freeze(this); // make properties constant
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