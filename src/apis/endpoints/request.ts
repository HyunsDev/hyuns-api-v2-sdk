import { Endpoint } from '../types/endpoint';

type Request = {
    _id: string;
    name: string;
    url: string;
    method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH';
    body?: string;
    headers?: string;
    image?: string;
    memo?: string;
};

// POST /request
export type postRequestsParameters = {
    name: string;
    url: string;
    method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH';
    body?: string;
    headers?: string;
    image?: string;
    memo?: string;
};
export const postRequests: Endpoint<postRequestsParameters> = {
    path: () => '/request',
    method: 'post',
    bodyParams: ['body', 'headers', 'image', 'method', 'memo', 'name', 'url'],
    pathParams: [],
    queryParams: [],
};
export type postRequestsResponse = {
    id: string;
};

// GET /request/:id
export type getRequestParameters = {
    id: string;
};
export const getRequest: Endpoint<getRequestParameters> = {
    path: (e) => `/request/${e.id}`,
    method: 'get',
    bodyParams: [],
    pathParams: ['id'],
    queryParams: [],
};
export type getRequestResponse = Request;

// GET /request
export type getRequestsParameters = Record<string, never>;
export const getRequests: Endpoint<getRequestsParameters> = {
    path: () => `/request`,
    method: 'get',
    bodyParams: [],
    pathParams: [],
    queryParams: [],
};
export type getRequestsResponse = {
    requests: Request[];
};

// POST /request/:id
export type postRequestParameters = {
    id: string;
};
export const postRequest: Endpoint<postRequestParameters> = {
    path: (e) => `/request/${e.id}`,
    method: 'post',
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
export type patchRequestParameters = {
    id: string;
    name?: string;
    url?: string;
    method?: Request['method'];
    body?: string;
    headers?: string;
    memo?: string;
    image?: string;
};
export const patchRequest: Endpoint<patchRequestParameters> = {
    path: (e) => `/request/${e.id}`,
    method: 'patch',
    bodyParams: ['body', 'headers', 'memo', 'image', 'method', 'name', 'url'],
    pathParams: ['id'],
    queryParams: [],
};
export type patchRequestResponse = Record<string, never>;

// DELETE /request/:id
export type deleteRequestParameters = {
    id: string;
};
export const deleteRequest: Endpoint<deleteRequestParameters> = {
    path: (e) => `/request/${e.id}`,
    method: 'delete',
    bodyParams: [],
    pathParams: ['id'],
    queryParams: [],
};
export type deleteRequestResponse = Request;
