export type RequestObject = {
    _id: string;
    name: string;
    url: string;
    method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH';
    body?: string;
    headers?: string;
    image?: string;
    memo?: string;
};
