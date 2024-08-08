import { UserFormOption, GuildFormOption } from './FormOption';
import {
    AccessControlResponse_Disallowed,
    AccessControlResponse_Ok,
} from '../Core/Options';

export type GuildGroupAccessChecker = (
    user_id: string,
    guild_id: string,
) => Promise<AccessControlResponse_Ok | AccessControlResponse_Disallowed>;

interface GuildFormOptionGroup {
    id: string;
    meta: { [key: string]: any };

    canAccess: GuildGroupAccessChecker;

    options: GuildFormOption<any>[];
}

export type UserGroupAccessChecker = (
    user_id: string,
) => Promise<AccessControlResponse_Ok | AccessControlResponse_Disallowed>;

interface UserFormOptionGroup {
    id: string;
    meta: { [key: string]: any };

    canAccess: UserGroupAccessChecker;

    options: UserFormOption<any>[];
}

export { UserFormOptionGroup, GuildFormOptionGroup };
