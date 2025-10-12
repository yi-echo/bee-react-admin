import type { ResultStatus } from "./enum";

export interface Result<T = unknown> {
	code: ResultStatus;
	message: string;
	data: T;
}
