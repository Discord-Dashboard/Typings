import {
    AccessControlResponse_Ok,
    AccessControlResponse_Disallowed,
    OptionSetResponse,
} from '../Core/Options';

export type UserGetter<T> = (user_id: string) => Promise<T>;
export type UserSetter<T> = (
    user_id: string,
    value: T,
) => Promise<OptionSetResponse>;
export type UserAccessChecker = (
    user_id: string,
) => Promise<AccessControlResponse_Ok | AccessControlResponse_Disallowed>;

export interface UserFormOption<T> {
    id: string;
    type: string;
    meta: { [key: string]: any };

    canAccess: UserAccessChecker;

    get: UserGetter<T>;
    set: UserSetter<T>;
}

export type GuildGetter<T> = (user_id: string, guild_id: string) => Promise<T>;
export type GuildSetter<T> = (
    user_id: string,
    guild_id: string,
    value: T,
) => Promise<OptionSetResponse>;
export type GuildAccessChecker = (
    user_id: string,
    guild_id: string,
) => Promise<AccessControlResponse_Ok | AccessControlResponse_Disallowed>;

export interface GuildFormOption<T> {
    id: string;
    type: string;
    meta: { [key: string]: any };

    canAccess: GuildAccessChecker;

    get: GuildGetter<T>;
    set: GuildSetter<T>;
}
