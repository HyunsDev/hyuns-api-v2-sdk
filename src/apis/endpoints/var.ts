import { Endpoint } from '../types/endpoint';

type Var = {
    _id: string;
    key: string;
    value: string;
    isPublic: boolean;
    isEncrypted: boolean;
    img: string;
    creator: string;
    createdAt: string;
    updatedAt: string;
};

// GET /var
export type getVarsParameters = Record<string, never>;
export const getVars: Endpoint<getVarsParameters> = {
    path: () => `/var`,
    method: 'get',
    bodyParams: [],
    pathParams: [],
    queryParams: [],
};
export type getVarsResponse = Var[];

// GET /var
export type getVarParameters = {
    key: string;
};
export const getVar: Endpoint<getVarParameters> = {
    path: (e) => `/var/${e.key}`,
    method: 'get',
    bodyParams: [],
    pathParams: ['key'],
    queryParams: [],
};
export type getVarResponse = Var['value'];

// POST /var
export type postVarParameters = {
    key: string;
    value: string;
    isPublic: boolean;
    isEncrypted: boolean;
    img: string;
};
export const postVar: Endpoint<postVarParameters> = {
    path: () => `/var`,
    method: 'post',
    bodyParams: ['img', 'isEncrypted', 'isPublic', 'key', 'value'],
    pathParams: [],
    queryParams: [],
};
export type postVarResponse = Record<string, never>;

// GET /var
export type deleteVarParameters = {
    key: string;
};
export const deleteVar: Endpoint<deleteVarParameters> = {
    path: (e) => `/var/${e.key}`,
    method: 'delete',
    bodyParams: [],
    pathParams: ['key'],
    queryParams: [],
};
export type deleteVarResponse = Record<string, never>;
