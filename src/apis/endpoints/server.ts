import { Endpoint } from '../types/endpoint';

type server = {
    _id: string;
    id: string;
    name: string;
    url: string;
    checkUrl: string;
    check: string;
    checkRecode: any[];
    lastCheckStatus: 'good' | string;
    memo?: string;
    img: string;
    token: string;
    createdAt: string;
    updatedAt: string;
};

// POST /server
export type postServerParameters = {
    id: string;
    name: string;
    checkUrl: string;
    check?: boolean;
    memo?: string;
    img?: string;
};
export const postServer: Endpoint<postServerParameters> = {
    path: () => '/server',
    method: 'post',
    bodyParams: ['check', 'checkUrl', 'id', 'img', 'memo', 'name'],
    pathParams: [],
    queryParams: [],
};
export type postServerResponse = Record<string, never>;

// GET /server/:id
export type getServerParameters = {
    id: string;
};
export const getServer: Endpoint<getServerParameters> = {
    path: (e) => `/server/${e.id}`,
    method: 'get',
    pathParams: ['id'],
    bodyParams: [],
    queryParams: [],
};
export type getServerResponse = server;

// GET /server
export type getServersParameters = Record<string, never>;
export const getServers: Endpoint<getServersParameters> = {
    path: () => `/server`,
    method: 'get',
    pathParams: [],
    bodyParams: [],
    queryParams: [],
};
export type getServersResponse = server[];

// PATCH /server/:id
export type patchServerParameters = {
    id: string;
    name?: string;
    checkUrl?: string;
    check?: boolean;
    memo?: string;
    img?: string;
};
export const patchServer: Endpoint<patchServerParameters> = {
    path: (e) => `/server/${e.id}`,
    method: 'patch',
    bodyParams: ['check', 'checkUrl', 'img', 'memo', 'name'],
    pathParams: ['id'],
    queryParams: [],
};
export type patchServerResponse = Record<string, never>;

// DELETE /server/:id
export type deleteServerParameters = {
    id: string;
};
export const deleteServer: Endpoint<deleteServerParameters> = {
    path: (e) => `/server/${e.id}`,
    method: 'delete',
    pathParams: ['id'],
    bodyParams: [],
    queryParams: [],
};
export type deleteServerResponse = server;
