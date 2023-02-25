export type LambdaObject = Record<string, any> & {
    FunctionName: string;
    FunctionArn: string;
    LastModified: string;
    Description: string;
    Handler: string;
};
