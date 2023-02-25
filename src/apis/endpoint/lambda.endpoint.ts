import { Endpoint } from 'endpoint-client';
import { LambdaObject } from '../object';

// GET /lambda
export type getLambdasParameter = Record<string, never>;
export const getLambdas: Endpoint<getLambdasParameter, getLambdaResponse> = {
    method: 'GET',
    path: () => '/lambda',
    bodyParams: [],
    queryParams: [],
    pathParams: [],
};

// GET /lambda/:id
export type getLambdaParameter = {
    name: string;
};
export const getLambda: Endpoint<getLambdaParameter, getLambdaResponse> = {
    method: 'GET',
    path: (e) => `/lambda/${e.name}`,
    bodyParams: [],
    queryParams: [],
    pathParams: [],
};
export type getLambdaResponse = LambdaObject;

// POST /lambda/:name
export type postLambdaParameter = {
    name: string;
};
export const postLambda: Endpoint<postLambdaParameter, postLambdaResponse> = {
    path: (p) => `/lambda/${p.name}`,
    method: 'POST',
    pathParams: ['name'],
    bodyParams: [],
    queryParams: [],
};
export type postLambdaResponse = any;
