export interface OptionResponse<T> {
    id: string;
    value: T;
    type: string;

    meta: { [key: string]: any };
}

export interface GroupResponse {
    id: string;
    meta: { [key: string]: any };

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
