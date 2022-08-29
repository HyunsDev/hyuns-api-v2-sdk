import { Endpoint } from '../types/endpoint';

type message = {
    _id: string;
    title: string;
    subTitle?: string;
    content?: string;
    buttons?: any;
    avatarName?: string;
    avatarIcon?: string;
    authorId: string;
    authorKind: string;
    state: string;
    type: string;
};

// POST /message
export type postMessageParameters = {
    title: string;
    subTitle?: string;
    content?: string;
    buttons?: any;
    avatarName?: string;
    avatarIcon?: string;
    type?: string;
    state?: string;
};
export const postMessage: Endpoint<postMessageParameters> = {
    path: () => '/message',
    method: 'post',
    bodyParams: ['title', 'subTitle', 'content', 'buttons', 'avatarIcon', 'avatarName', 'type', 'state'],
    pathParams: [],
    queryParams: [],
};
export type postMessageResponse = {
    id: string;
};

// GET /message/:id
export type getMessageParameters = {
    id: string;
};
export const getMessage: Endpoint<getMessageParameters> = {
    method: 'post',
    queryParams: ['id'],
    bodyParams: [],
    pathParams: [],
    path: (e) => `/message/${e.id}`,
};
export type getMessageResponse = message;

// GET /message
export type getMessagesParameters = Record<string, never>;
export const getMessages: Endpoint<getMessagesParameters> = {
    method: 'get',
    path: () => '/message',
    bodyParams: [],
    queryParams: [],
    pathParams: [],
};
export type getMessagesResponse = message[];

// PATCH /message/:id
export type patchMessageParameters = {
    id: string;
    content?: string;
    embed?: string;
    buttons?: string;
    type?: string;
    state?: string;
};
export const patchMessage: Endpoint<patchMessageParameters> = {
    path: (e) => `/message/${e.id}`,
    method: 'patch',
    bodyParams: ['content', 'embed', 'buttons', 'type', 'state'],
    pathParams: ['id'],
    queryParams: [],
};
export type patchMessageResponse = Record<string, never>;

// DELETE /message/:id
export type deleteMessageParameters = {
    id: string;
};
export const deleteMessage: Endpoint<deleteMessageParameters> = {
    path: (e) => `/message/${e.id}`,
    method: 'delete',
    pathParams: ['id'],
    queryParams: [],
    bodyParams: [],
};
export type deleteMessageResponse = Record<string, never>;
