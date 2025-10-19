export type Command = {
    name: string;
    description: string;
    execute: (...args: any[]) => Promise<any>;
};

export type Plugin = {
    name: string;
    version: string;
    initialize: () => void;
};

export type Result = {
    success: boolean;
    data?: any;
    error?: string;
};