export type UserGetter<T> = (user_id: string) => Promise<T>;
export type UserSetter<T> = (user_id: string, value: T) => Promise<T>;
export type UserAccessChecker = (user_id: string) => Promise<boolean>;

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
) => Promise<T>;
export type GuildAccessChecker = (
    user_id: string,
    guild_id: string,
) => Promise<boolean>;

export interface GuildFormOption<T> {
    id: string;
    type: string;
    meta: { [key: string]: any };

    canAccess: GuildAccessChecker;

    get: GuildGetter<T>;
    set: GuildSetter<T>;
}
