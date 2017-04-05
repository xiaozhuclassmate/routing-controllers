import {MiddlewareGlobalAfter} from "../../../../../src/deprecated/JsonResponse";
import {ErrorMiddlewareInterface} from "../../../../../src/middleware/ErrorMiddlewareInterface";

@MiddlewareGlobalAfter()
export class PostErrorHandler implements ErrorMiddlewareInterface {

    error(error: any, request: any, response: any, next?: Function): void {
        console.log("Error handled on post handler: ", error);
        next(error);
    }
    
}