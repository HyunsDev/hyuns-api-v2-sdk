import axios from 'axios';
import {
    getLambda,
    getLambdaParameters,
    getLambdaResponse,
    getLambdas,
    getLambdasParameters,
    getLambdasResponse,
    postLambda,
    postLambdaParameters,
    postLambdaResponse,
} from './endpoints/lambda';
import {
    deleteMessage,
    deleteMessageParameters,
    deleteMessageResponse,
    getMessage,
    getMessageParameters,
    getMessageResponse,
    getMessages,
    getMessagesParameters,
    getMessagesResponse,
    patchMessage,
    patchMessageParameters,
    patchMessageResponse,
    postMessage,
    postMessageParameters,
    postMessageResponse,
} from './endpoints/message';
import {
    deleteResource,
    deleteResourceParameters,
    deleteResourceResponse,
    getResources,
    getResourcesParameters,
    getResourcesResponse,
    postResource,
    postResourceParameters,
    postResourceResponse,
} from './endpoints/resource';
import {
    postServer,
    postServerParameters,
    postServerResponse,
    getServer,
    getServerParameters,
    getServerResponse,
    getServers,
    getServersParameters,
    getServersResponse,
    patchServer,
    patchServerParameters,
    patchServerResponse,
    deleteServer,
    deleteServerParameters,
    deleteServerResponse,
} from './endpoints/server';
import {
    getVar,
    getVarParameters,
    getVarResponse,
    getVars,
    getVarsParameters,
    getVarsResponse,
    postVar,
    postVarParameters,
    postVarResponse,
    deleteVar,
    deleteVarParameters,
    deleteVarResponse,
} from './endpoints/var';
import { isHTTPResponseError, isHyunsAPIClientError, RequestTimeoutError } from './error';
import { pick } from './utils/utils';

export interface ClientOptions {
    auth?: string;
    timeoutMs?: number;
    baseUrl?: string;
    notionVersion?: string;
}

type Method = 'get' | 'post' | 'patch' | 'delete';
type QueryParams = Record<string, string | number | boolean> | URLSearchParams;
type WithAuth<P> = P & { auth?: string };

export interface RequestParameters {
    path: string;
    method: Method;
    query?: QueryParams;
    body?: Record<string, unknown>;
    auth?: string;
}

export default class Client {
    private auth?: string;
    private prefixUrl: string;
    private userAgent: string;
    private timeoutMs: number;

    public constructor(options?: ClientOptions) {
        this.auth = options?.auth;
        this.prefixUrl = options?.baseUrl ?? 'https://apiv2.hyuns.dev';
        this.userAgent = 'hyuns-api-client';
        this.timeoutMs = options?.timeoutMs || 5000;
    }

    private authAsHeaders(auth?: string): Record<string, string> {
        const headers: Record<string, string> = {};
        const authHeaderValue = auth ?? this.auth;
        if (authHeaderValue !== undefined) {
            headers['authorization'] = `Bearer ${authHeaderValue}`;
        }
        return headers;
    }

    public async request<ResponseBody>({ path, method, query, body, auth }: RequestParameters): Promise<ResponseBody> {
        const url = `${this.prefixUrl}${path}`;
        const headers: Record<string, string> = {
            ...this.authAsHeaders(auth),
            'user-agent': this.userAgent,
        };

        try {
            const response = await RequestTimeoutError.rejectAfterTimeout(
                axios(url, {
                    method: method.toUpperCase(),
                    headers,
                    data: body,
                    params: query,
                }),
                this.timeoutMs
            );

            return response.data;
        } catch (error: unknown) {
            if (!isHyunsAPIClientError(error)) throw error;
            if (!isHTTPResponseError(error)) throw error;
            throw error;
        }
    }
    public readonly lambda = {
        list: (args: WithAuth<getLambdasParameters>): Promise<getLambdasResponse> => {
            return this.request<getLambdasResponse>({
                path: getLambdas.path(args),
                method: getLambdas.method,
                query: pick(args, getLambdas.queryParams),
                body: pick(args, getLambdas.bodyParams),
                auth: args?.auth,
            });
        },
        get: (args: WithAuth<getLambdaParameters>): Promise<getLambdaResponse> => {
            return this.request<getLambdaResponse>({
                path: getLambda.path(args),
                method: getLambda.method,
                query: pick(args, getLambda.queryParams),
                body: pick(args, getLambda.bodyParams),
                auth: args?.auth,
            });
        },
        invoke: (args: WithAuth<postLambdaParameters>): Promise<postLambdaResponse> => {
            return this.request<postLambdaResponse>({
                path: postLambda.path(args),
                method: postLambda.method,
                query: pick(args, postLambda.queryParams),
                body: pick(args, postLambda.bodyParams),
                auth: args?.auth,
            });
        },
    };

    public readonly message = {
        get: (args: WithAuth<getMessageParameters>): Promise<getMessageResponse> => {
            return this.request<getMessageResponse>({
                path: getMessage.path(args),
                method: getMessage.method,
                query: pick(args, getMessage.queryParams),
                body: pick(args, getMessage.bodyParams),
                auth: args?.auth,
            });
        },

        list: (args: WithAuth<getMessagesParameters>): Promise<getMessagesResponse> => {
            return this.request<getMessagesResponse>({
                path: getMessages.path(args),
                method: getMessages.method,
                query: pick(args, getMessages.queryParams),
                body: pick(args, getMessages.bodyParams),
                auth: args?.auth,
            });
        },

        post: (args: WithAuth<postMessageParameters>): Promise<postMessageResponse> => {
            return this.request<postMessageResponse>({
                path: postMessage.path(args),
                method: postMessage.method,
                query: pick(args, postMessage.queryParams),
                body: pick(args, postMessage.bodyParams),
                auth: args?.auth,
            });
        },

        delete: (args: WithAuth<deleteMessageParameters>): Promise<deleteMessageResponse> => {
            return this.request<deleteMessageResponse>({
                path: deleteMessage.path(args),
                method: deleteMessage.method,
                query: pick(args, deleteMessage.queryParams),
                body: pick(args, deleteMessage.bodyParams),
                auth: args?.auth,
            });
        },

        patch: (args: WithAuth<patchMessageParameters>): Promise<patchMessageResponse> => {
            return this.request<patchMessageResponse>({
                path: patchMessage.path(args),
                method: patchMessage.method,
                query: pick(args, patchMessage.queryParams),
                body: pick(args, patchMessage.bodyParams),
                auth: args?.auth,
            });
        },
    };

    public readonly resource = {
        post: (args: WithAuth<postResourceParameters>): Promise<postResourceResponse> => {
            return this.request<postResourceResponse>({
                path: postResource.path(args),
                method: postResource.method,
                query: pick(args, postResource.queryParams),
                body: pick(args, postResource.bodyParams),
                auth: args?.auth,
            });
        },

        list: (args: WithAuth<getResourcesParameters>): Promise<getResourcesResponse> => {
            return this.request<getResourcesResponse>({
                path: getResources.path(args),
                method: getResources.method,
                query: pick(args, getResources.queryParams),
                body: pick(args, getResources.bodyParams),
                auth: args?.auth,
            });
        },

        delete: (args: WithAuth<deleteResourceParameters>): Promise<deleteResourceResponse> => {
            return this.request<deleteResourceResponse>({
                path: deleteResource.path(args),
                method: deleteResource.method,
                query: pick(args, deleteResource.queryParams),
                body: pick(args, deleteResource.bodyParams),
                auth: args?.auth,
            });
        },
    };

    public readonly server = {
        post: (args: WithAuth<postServerParameters>): Promise<postServerResponse> => {
            return this.request<postServerResponse>({
                path: postServer.path(args),
                method: postServer.method,
                query: pick(args, postServer.queryParams),
                body: pick(args, postServer.bodyParams),
                auth: args?.auth,
            });
        },

        get: (args: WithAuth<getServerParameters>): Promise<getServerResponse> => {
            return this.request<getServerResponse>({
                path: getServer.path(args),
                method: getServer.method,
                query: pick(args, getServer.queryParams),
                body: pick(args, getServer.bodyParams),
                auth: args?.auth,
            });
        },

        list: (args: WithAuth<getServersParameters>): Promise<getServersResponse> => {
            return this.request<getServersResponse>({
                path: getServers.path(args),
                method: getServers.method,
                query: pick(args, getServers.queryParams),
                body: pick(args, getServers.bodyParams),
                auth: args?.auth,
            });
        },

        patch: (args: WithAuth<patchServerParameters>): Promise<patchServerResponse> => {
            return this.request<patchServerResponse>({
                path: patchServer.path(args),
                method: patchServer.method,
                query: pick(args, patchServer.queryParams),
                body: pick(args, patchServer.bodyParams),
                auth: args?.auth,
            });
        },

        delete: (args: WithAuth<deleteServerParameters>): Promise<deleteServerResponse> => {
            return this.request<deleteServerResponse>({
                path: deleteServer.path(args),
                method: deleteServer.method,
                query: pick(args, deleteServer.queryParams),
                body: pick(args, deleteServer.bodyParams),
                auth: args?.auth,
            });
        },
    };

    public readonly var = {
        get: (args: WithAuth<getVarParameters>): Promise<getVarResponse> => {
            return this.request<getVarResponse>({
                path: getVar.path(args),
                method: getVar.method,
                query: pick(args, getVar.queryParams),
                body: pick(args, getVar.bodyParams),
                auth: args?.auth,
            });
        },
        post: (args: WithAuth<postVarParameters>): Promise<postVarResponse> => {
            return this.request<postVarResponse>({
                path: postVar.path(args),
                method: postVar.method,
                query: pick(args, postVar.queryParams),
                body: pick(args, postVar.bodyParams),
                auth: args?.auth,
            });
        },
        list: (args: WithAuth<getVarsParameters>): Promise<getVarsResponse> => {
            return this.request<getVarsResponse>({
                path: getVars.path(args),
                method: getVars.method,
                query: pick(args, getVars.queryParams),
                body: pick(args, getVars.bodyParams),
                auth: args?.auth,
            });
        },
        delete: (args: WithAuth<deleteVarParameters>): Promise<deleteVarResponse> => {
            return this.request<deleteVarResponse>({
                path: deleteVar.path(args),
                method: deleteVar.method,
                query: pick(args, deleteVar.queryParams),
                body: pick(args, deleteVar.bodyParams),
                auth: args?.auth,
            });
        },
    };
}
