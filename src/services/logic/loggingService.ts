import { AbstractLogggingService } from "one-frontend-framework";
import { singleton } from "tsyringe";

export interface ServerError {
    code: string;
    title: string;
    message: string;
    type: string;
}

@singleton()
export class LogggingService extends AbstractLogggingService {
    /**
         * Log error
         * @param ex
         */
    public logError(ex: unknown): void {
        console.log(ex);
    }

}