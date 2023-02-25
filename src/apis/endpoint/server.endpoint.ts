import { Endpoint } from 'endpoint-client';
import { ServerObject } from '../object';

// POST /server
export type postServerParameter = {
    id: string;
    name: string;
    checkUrl: string;
    check?: boolean;
    memo?: string;
    img?: string;
};
export const postServer: Endpoint<postServerParameter, postServerResponse> = {
    path: () => '/server',
    method: 'POST',
    bodyParams: ['check', 'checkUrl', 'id', 'img', 'memo', 'name'],
    pathParams: [],
    queryParams: [],
};
export type postServerResponse = Record<string, never>;

// GET /server/:id
export type getServerParameter = {
    id: string;
};
export const getServer: Endpoint<getServerParameter, getServerResponse> = {
    path: (e) => `/server/${e.id}`,
    method: 'GET',
    pathParams: ['id'],
    bodyParams: [],
    queryParams: [],
};
export type getServerResponse = ServerObject;

// GET /server
export type getServersParameter = Record<string, never>;
export const getServers: Endpoint<getServersParameter, getServersResponse> = {
    path: () => `/server`,
    method: 'GET',
    pathParams: [],
    bodyParams: [],
    queryParams: [],
};
export type getServersResponse = ServerObject[];

// PATCH /server/:id
export type patchServerParameter = {
    id: string;
    name?: string;
    checkUrl?: string;
    check?: boolean;
    memo?: string;
    img?: string;
};
export const patchServer: Endpoint<patchServerParameter, patchServerResponse> = {
    path: (e) => `/server/${e.id}`,
    method: 'PATCH',
    bodyParams: ['check', 'checkUrl', 'img', 'memo', 'name'],
    pathParams: ['id'],
    queryParams: [],
};
export type patchServerResponse = Record<string, never>;

// DELETE /server/:id
export type deleteServerParameter = {
    id: string;
};
export const deleteServer: Endpoint<deleteServerParameter, deleteServerResponse> = {
    path: (e) => `/server/${e.id}`,
    method: 'DELETE',
    pathParams: ['id'],
    bodyParams: [],
    queryParams: [],
};
export type deleteServerResponse = ServerObject;
