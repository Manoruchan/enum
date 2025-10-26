import { Enum } from "../src/Enum";

class HttpCode extends Enum<Record<string, number>> {
    public isError(value: number): boolean {
        return value >= 400;
    }

    public isClientError(value: number): boolean {
        return this.BAD_REQUEST <= value && value < this.INTERNAL_SERVER_ERROR;
    }
}

const codes = {
    OK: 200,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
} as const;

const http = HttpCode.create(codes);

console.log(http.isClientError(http.NOT_FOUND)); // true
console.log(http.isError(http.OK)); // false