import { Endpoint } from 'endpoint-client';
import { VarObject } from '../object';

// GET /var
export type getVarsParameter = Record<string, never>;
export const getVars: Endpoint<getVarsParameter, getVarsResponse> = {
    path: () => `/var`,
    method: 'GET',
    bodyParams: [],
    pathParams: [],
    queryParams: [],
};
export type getVarsResponse = VarObject[];

// GET /var
export type getVarParameter = {
    key: string;
};
export const getVar: Endpoint<getVarParameter, getVarResponse> = {
    path: (e) => `/var/${e.key}`,
    method: 'GET',
    bodyParams: [],
    pathParams: ['key'],
    queryParams: [],
};
export type getVarResponse = VarObject['value'];

// POST /var
export type postVarParameter = {
    key: string;
    value: string;
    isPublic: boolean;
    isEncrypted: boolean;
    img: string;
};
export const postVar: Endpoint<postVarParameter, postVarResponse> = {
    path: () => `/var`,
    method: 'POST',
    bodyParams: ['img', 'isEncrypted', 'isPublic', 'key', 'value'],
    pathParams: [],
    queryParams: [],
};
export type postVarResponse = Record<string, never>;

// GET /var
export type deleteVarParameter = {
    key: string;
};
export const deleteVar: Endpoint<deleteVarParameter, deleteVarResponse> = {
    path: (e) => `/var/${e.key}`,
    method: 'DELETE',
    bodyParams: [],
    pathParams: ['key'],
    queryParams: [],
};
export type deleteVarResponse = Record<string, never>;
