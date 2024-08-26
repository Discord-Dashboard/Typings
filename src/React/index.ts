export interface TGuildData {
    id: string;
    meta: any;
    options: {
        id: string;
        type: string;
        meta: {
            core: any;
        };
        value: any;
        disabled?: boolean;
    }[];
}

export interface TGuildOptionsUpdate {
    id: string;
    options: {
        id: string;
        value: any;
    }[];
}
