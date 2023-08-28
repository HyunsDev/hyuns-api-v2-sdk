import { Endpoint } from 'endpoint-client';
import { MessageObject } from '../object';

// POST /message
export type postMessageParameter = {
    title: string;
    subTitle?: string;
    content?: string;
    buttons?: any;
    avatarName?: string;
    avatarIcon?: string;
    type?: string;
    state?: string;
};
export const postMessage: Endpoint<postMessageParameter, postMessageResponse> = {
    path: () => '/message',
    method: 'POST',
    bodyParams: ['title', 'subTitle', 'content', 'buttons', 'avatarIcon', 'avatarName', 'type', 'state'],
    pathParams: [],
    queryParams: [],
};
export type postMessageResponse = {
    id: string;
};

// GET /message/:id
export type getMessageParameter = {
    id: string;
};
export const getMessage: Endpoint<getMessageParameter, getMessageResponse> = {
    method: 'POST',
    queryParams: ['id'],
    bodyParams: [],
    pathParams: [],
    path: (e) => `/message/${e.id}`,
};
export type getMessageResponse = MessageObject;

// GET /message
export type getMessagesParameter = Record<string, never>;
export const getMessages: Endpoint<getMessagesParameter, getMessagesResponse> = {
    method: 'GET',
    path: () => '/message',
    bodyParams: [],
    queryParams: [],
    pathParams: [],
};
export type getMessagesResponse = {
    messages: MessageObject[];
};

// PATCH /message/:id
export type patchMessageParameter = {
    id: string;
    content?: string;
    embed?: string;
    buttons?: string;
    type?: string;
    state?: string;
};
export const patchMessage: Endpoint<patchMessageParameter, patchMessageResponse> = {
    path: (e) => `/message/${e.id}`,
    method: 'PATCH',
    bodyParams: ['content', 'embed', 'buttons', 'type', 'state'],
    pathParams: ['id'],
    queryParams: [],
};
export type patchMessageResponse = Record<string, never>;

// DELETE /message/:id
export type deleteMessageParameter = {
    id: string;
};
export const deleteMessage: Endpoint<deleteMessageParameter, deleteMessageResponse> = {
    path: (e) => `/message/${e.id}`,
    method: 'DELETE',
    pathParams: ['id'],
    queryParams: [],
    bodyParams: [],
};
export type deleteMessageResponse = Record<string, never>;
