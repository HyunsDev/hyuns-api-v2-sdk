export type MessageObject = {
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
    createdAt: string;
};
