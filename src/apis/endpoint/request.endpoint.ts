import { Endpoint } from 'endpoint-client';
import { RequestObject } from '../object';

// POST /request
export type postRequestsParameter = {
    name: string;
    url: string;
    method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH';
    body?: string;
    headers?: string;
    image?: string;
    memo?: string;
};
export const postRequests: Endpoint<postRequestsParameter, postRequestResponse> = {
    path: () => '/request',
    method: 'POST',
    bodyParams: ['body', 'headers', 'image', 'method', 'memo', 'name', 'url'],
    pathParams: [],
    queryParams: [],
};
export type postRequestsResponse = {
    id: string;
};

// GET /request/:id
export type getRequestParameter = {
    id: string;
};
export const getRequest: Endpoint<getRequestParameter, getRequestResponse> = {
    path: (e) => `/request/${e.id}`,
    method: 'GET',
    bodyParams: [],
    pathParams: ['id'],
    queryParams: [],
};
export type getRequestResponse = RequestObject;

// GET /request
export type getRequestsParameter = Record<string, never>;
export const getRequests: Endpoint<getRequestsParameter, getRequestsResponse> = {
    path: () => `/request`,
    method: 'GET',
    bodyParams: [],
    pathParams: [],
    queryParams: [],
};
export type getRequestsResponse = {
    requests: RequestObject[];
};

// POST /request/:id
export type postRequestParameter = {
    id: string;
};
export const postRequest: Endpoint<postRequestParameter, postRequestResponse> = {
    path: (e) => `/request/${e.id}`,
    method: 'POST',
    bodyParams: [],
    pathParams: ['id'],
    queryParams: [],
};
export type postRequestResponse =
    | {
          isConnected: false;
      }
    | {
          isConnected: true;
          status: number;
          data: any;
      };

// PATCH /request/:id
export type patchRequestParameter = {
    id: string;
    name?: string;
    url?: string;
    method?: RequestObject['method'];
    body?: string;
    headers?: string;
    memo?: string;
    image?: string;
};
export const patchRequest: Endpoint<patchRequestParameter, patchRequestResponse> = {
    path: (e) => `/request/${e.id}`,
    method: 'PATCH',
    bodyParams: ['body', 'headers', 'memo', 'image', 'method', 'name', 'url'],
    pathParams: ['id'],
    queryParams: [],
};
export type patchRequestResponse = Record<string, never>;

// DELETE /request/:id
export type deleteRequestParameter = {
    id: string;
};
export const deleteRequest: Endpoint<deleteRequestParameter, deleteRequestResponse> = {
    path: (e) => `/request/${e.id}`,
    method: 'DELETE',
    bodyParams: [],
    pathParams: ['id'],
    queryParams: [],
};
export type deleteRequestResponse = RequestObject;
