import { ClientOptions } from "../typings/Client";
import { RequestHandler } from "./Request.Handler";

export class AITools extends RequestHandler {
    RejectErrors;
    HandleOK;
    constructor(options?: ClientOptions)
    {
        super("https://ai-tools-server.vercel.app");
        this.RejectErrors = (options && 'reject' in options) ? options.reject : true;
        this.HandleOK = (options && 'handleOK' in options) ? options.handleOK : true;
    }

    NSFW(fileUri: string)
    {
        return new Promise((resolve, reject) => {
            this.send("/api/nsfw", "get", { input: fileUri })
            .then(data => {
                if('ok' in data && !data.ok)
                    if(this.RejectErrors)
                        reject(data['message']);

                if(this.HandleOK)
                    delete data['ok'];
                
                resolve(data);
            })
            .catch(e => {
                if(this.RejectErrors)
                    reject(e);
                else
                    resolve(e);
            })
        });
    }

    FaceDetector(fileUri: string)
    {
        return new Promise((resolve, reject) => {
            this.send("/api/face-detection", "get", { input: fileUri })
            .then(data => {
                if('ok' in data && !data.ok)
                    if(this.RejectErrors)
                        reject(data['message']);

                if(this.HandleOK)
                    delete data['ok'];
                
                resolve(data);
            })
            .catch(e => {
                if(this.RejectErrors)
                    reject(e);
                else
                    resolve(e);
            })
        });
    }
}