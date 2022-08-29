import { Endpoint } from '../types/endpoint';

type resource = {
    Key: string;
    LastModified: string;
    ETag: string;
    ChecksumAlgorithm: any[];
    Size: number;
    StorageClass: string;
};

// POST /resource
export type postResourceParameters = {
    key: string;
};
export const postResource: Endpoint<postResourceParameters> = {
    path: () => '/resource',
    method: 'post',
    queryParams: [],
    bodyParams: ['key'],
    pathParams: [],
};
export type postResourceResponse = {
    url: string;
};

// GET /resource
export type getResourcesParameters = Record<string, never>;
export const getResources: Endpoint<getResourcesParameters> = {
    path: () => '/resource',
    method: 'get',
    queryParams: [],
    bodyParams: [],
    pathParams: [],
};
export type getResourcesResponse = resource[];

// DELETE /resource/:id
export type deleteResourceParameters = {
    key: string;
};
export const deleteResource: Endpoint<deleteResourceParameters> = {
    path: (e) => `/resource/${e.key}`,
    method: 'delete',
    queryParams: [],
    bodyParams: [],
    pathParams: ['key'],
};
export type deleteResourceResponse = Record<string, never>;
