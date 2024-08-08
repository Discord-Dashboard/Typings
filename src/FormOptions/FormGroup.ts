import type { UserFormOption, GuildFormOption } from './FormOption';

interface GuildFormOptionGroup {
    id: string;
    meta: { [key: string]: any };

    options: GuildFormOption<any>[];
}

interface UserFormOptionGroup {
    id: string;
    meta: { [key: string]: any };

    options: UserFormOption<any>[];
}

export { UserFormOptionGroup, GuildFormOptionGroup };
