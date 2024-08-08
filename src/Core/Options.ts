export interface OptionResponse<T> {
    id: string;
    value: T;
    type: string;

    disabled?: {
        bool: boolean;
        message?: string;
    };

    meta: { [key: string]: any };
}

export interface GroupResponse {
    id: string;
    meta: { [key: string]: any };

    disabled?: {
        bool: boolean;
        message?: string;
    };

    options: OptionResponse<any>[];
}

export interface OptionUpdateRequest<T> {
    id: string;
    value: T;
}

export interface GroupUpdateRequest {
    id: string;
    options: OptionUpdateRequest<any>[];
}

export interface OptionSetResponse {
    error: boolean;
    message?: string;
}

export interface AccessControlResponse_Ok {
    allowed: true;
}

export interface AccessControlResponse_Disallowed {
    allowed: false;
    display_in_api: boolean;
    error: {
        message?: string;
    };
}
