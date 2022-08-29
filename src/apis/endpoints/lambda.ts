import { Endpoint } from '../types/endpoint';

type Lambda = Record<string, any> & {
    FunctionName: string;
    FunctionArn: string;
    LastModified: string;
    Description: string;
    Handler: string;
};

// GET /lambda
export type getLambdasParameters = Record<string, never>;
export const getLambdas: Endpoint<getLambdasParameters> = {
    method: 'get',
    path: () => '/lambda',
    bodyParams: [],
    queryParams: [],
    pathParams: [],
};
export type getLambdasResponse = Lambda[];

// GET /lambda/:id
export type getLambdaParameters = {
    name: string;
};
export const getLambda: Endpoint<getLambdaParameters> = {
    method: 'get',
    path: (e) => `/lambda/${e.name}`,
    bodyParams: [],
    queryParams: [],
    pathParams: [],
};
export type getLambdaResponse = Lambda;

// POST /lambda/:name
export type postLambdaParameters = {
    name: string;
};
export const postLambda: Endpoint<postLambdaParameters> = {
    path: (p) => `/lambda/${p.name}`,
    method: 'post',
    pathParams: ['name'],
    bodyParams: [],
    queryParams: [],
};
export type postLambdaResponse = any;
