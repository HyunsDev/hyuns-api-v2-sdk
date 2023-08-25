import { Endpoint } from 'endpoint-client';
import { ResourceObject } from '../object';

// POST /resource
export type postResourceParameter = {
    key: string;
};
export const postResource: Endpoint<postResourceParameter, postResourceResponse> = {
    path: () => '/resource',
    method: 'POST',
    queryParams: [],
    bodyParams: ['key'],
    pathParams: [],
};
export type postResourceResponse = {
    url: string;
};

// GET /resource
export type getResourcesParameter = Record<string, never>;
export const getResources: Endpoint<getResourcesParameter, getResourcesResponse> = {
    path: () => '/resource',
    method: 'GET',
    queryParams: [],
    bodyParams: [],
    pathParams: [],
};
export type getResourcesResponse = ResourceObject[];

// DELETE /resource/:id
export type deleteResourceParameter = {
    key: string;
};
export const deleteResource: Endpoint<deleteResourceParameter, deleteResourceResponse> = {
    path: (e) => `/resource/${e.key}`,
    method: 'DELETE',
    queryParams: [],
    bodyParams: [],
    pathParams: ['key'],
};
export type deleteResourceResponse = Record<string, never>;
