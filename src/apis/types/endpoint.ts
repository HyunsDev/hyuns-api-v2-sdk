export type Endpoint<T extends Record<string, any>> = {
    method: 'get' | 'post' | 'patch' | 'get' | 'delete';
    path: (e: T) => string;
    pathParams: (keyof T)[];
    queryParams: (keyof T)[];
    bodyParams: (keyof T)[];
};
