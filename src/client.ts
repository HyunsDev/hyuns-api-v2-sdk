import { EndpointClient } from 'endpoint-client';
import { Endpoint } from './apis';

export class HyunsClient extends EndpointClient {
    readonly lambda = {
        list: this.endpointBuilder(Endpoint.Lambda.getLambdas),
        get: this.endpointBuilder(Endpoint.Lambda.getLambda),
        invoke: this.endpointBuilder(Endpoint.Lambda.postLambda),
    };

    readonly message = {
        get: this.endpointBuilder(Endpoint.Message.getMessage),
        list: this.endpointBuilder(Endpoint.Message.getMessages),
        post: this.endpointBuilder(Endpoint.Message.postMessage),
        delete: this.endpointBuilder(Endpoint.Message.deleteMessage),
        patch: this.endpointBuilder(Endpoint.Message.patchMessage),
    };

    readonly resource = {
        post: this.endpointBuilder(Endpoint.Resource.postResource),
        list: this.endpointBuilder(Endpoint.Resource.getResources),
        delete: this.endpointBuilder(Endpoint.Resource.deleteResource),
    };

    readonly server = {
        post: this.endpointBuilder(Endpoint.Server.postServer),
        get: this.endpointBuilder(Endpoint.Server.getServer),
        list: this.endpointBuilder(Endpoint.Server.getServers),
        patch: this.endpointBuilder(Endpoint.Server.patchServer),
        delete: this.endpointBuilder(Endpoint.Server.deleteServer),
    };

    readonly var = {
        get: this.endpointBuilder(Endpoint.Var.getVar),
        post: this.endpointBuilder(Endpoint.Var.postVar),
        list: this.endpointBuilder(Endpoint.Var.getVar),
        delete: this.endpointBuilder(Endpoint.Var.deleteVar),
    };

    readonly httpRequest = {
        get: this.endpointBuilder(Endpoint.Request.getRequest),
        create: this.endpointBuilder(Endpoint.Request.postRequests),
        list: this.endpointBuilder(Endpoint.Request.getRequests),
        execute: this.endpointBuilder(Endpoint.Request.postRequest),
        patch: this.endpointBuilder(Endpoint.Request.patchRequest),
        delete: this.endpointBuilder(Endpoint.Request.deleteRequest),
    };

    readonly auth = {
        login: this.endpointBuilder(Endpoint.Auth.postAuthLogin),
    };
}
