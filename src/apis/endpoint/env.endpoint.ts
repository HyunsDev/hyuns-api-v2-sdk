import { Endpoint } from 'endpoint-client';
import { EnvObject } from '../object';

// GET /env
export type getEnvsParameter = Record<string, never>;
export const getEnvs: Endpoint<getEnvsParameter, getEnvsResponse> = {
    path: () => `/env`,
    method: 'GET',
    bodyParams: [],
    pathParams: [],
    queryParams: [],
};
export type getEnvsResponse = EnvObject[];

// GET /env/:key
export type getEnvParameter = {
    key: string;
};
export const getEnv: Endpoint<getEnvParameter, getEnvResponse> = {
    path: (e) => `/env/${e.key}`,
    method: 'GET',
    bodyParams: [],
    pathParams: ['key'],
    queryParams: [],
};
export type getEnvResponse = EnvObject;

// POST /env
export type postEnvParameter = {
    key: string;
    value: string;
    isPublic: boolean;
    img: string;
};
export const postEnv: Endpoint<postEnvParameter, postEnvResponse> = {
    path: () => `/env`,
    method: 'POST',
    bodyParams: ['img', 'isPublic', 'key', 'value'],
    pathParams: [],
    queryParams: [],
};
export type postEnvResponse = Record<string, never>;

// DELETE /env
export type deleteEnvParameter = {
    key: string;
};
export const deleteEnv: Endpoint<deleteEnvParameter, deleteEnvResponse> = {
    path: (e) => `/env/${e.key}`,
    method: 'DELETE',
    bodyParams: [],
    pathParams: ['key'],
    queryParams: [],
};
export type deleteEnvResponse = Record<string, never>;
