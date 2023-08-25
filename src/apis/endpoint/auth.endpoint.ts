import { Endpoint } from 'endpoint-client';

// POST /auth/login
export type postAuthLoginParameter = {
    id: string;
    password: string;
};
export const postAuthLogin: Endpoint<postAuthLoginParameter, postAuthLoginResponse> = {
    path: () => '/auth/login',
    method: 'POST',
    bodyParams: ['id', 'password'],
    pathParams: [],
    queryParams: [],
};
export type postAuthLoginResponse = {
    token: string;
};
