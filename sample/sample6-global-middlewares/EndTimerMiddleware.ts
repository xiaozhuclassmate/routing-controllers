import {MiddlewareGlobalAfter} from "../../src/deprecated/JsonResponse";
import {MiddlewareInterface} from "../../src/middleware/MiddlewareInterface";

@MiddlewareGlobalAfter()
export class EndTimerMiddleware implements MiddlewareInterface {

    use(request: any, response: any, next?: Function): any {
        console.log("timer is ended.");
        next();
    }
    
}