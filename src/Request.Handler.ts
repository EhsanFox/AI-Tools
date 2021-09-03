import * as request from "request-promise";
import { Methods } from "../typings/Method.request";
export class RequestHandler {
    BaseURL: string;
    send: (uri: string, method: Methods, body?: object) => request.RequestPromise<any>;
    constructor(ServerURL: string)
    {
        this.BaseURL = ServerURL;

        this.send = (uri: string, method: Methods, body?: object) =>
        {
            return request[method]
                (
                    {
                        uri: this.BaseURL + uri,
                        qs: body,
                        json: true
                    }
                ) as request.RequestPromise<any>;
        }
    }

    
}