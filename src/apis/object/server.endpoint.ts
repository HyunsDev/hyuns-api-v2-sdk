export type ServerObject = {
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
