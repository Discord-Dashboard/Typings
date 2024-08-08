import type {
    GuildFormOptionGroup,
    GuildGroupAccessChecker,
    UserFormOptionGroup,
    UserGroupAccessChecker,
} from './FormGroup';
import type {
    GuildAccessChecker,
    GuildFormOption,
    UserFormOption,
} from './FormOption';

abstract class BaseGroupBuilder {
    protected id!: string;
    protected meta: { [key: string]: any } = {};

    public setId(id: string): this {
        this.id = id;
        return this;
    }

    public setMeta(meta: { [key: string]: any }): this {
        this.meta = meta;
        return this;
    }
}

export class GuildFormGroupBuilder extends BaseGroupBuilder {
    protected options!: GuildFormOption<any>[];

    private canAccess: GuildGroupAccessChecker = async () => {
        return { allowed: true };
    };

    public setOptions(options: GuildFormOption<any>[]) {
        this.options = options;
        return this;
    }

    public onAccessCheck(accessChecker: GuildGroupAccessChecker): this {
        this.canAccess = accessChecker;
        return this;
    }

    public build(): GuildFormOptionGroup {
        return {
            id: this.id,
            canAccess: this.canAccess,
            meta: this.meta,
            options: this.options,
        };
    }
}

export class UserFormGroupBuilder extends BaseGroupBuilder {
    protected options!: UserFormOption<any>[];

    private canAccess: UserGroupAccessChecker = async () => {
        return { allowed: true };
    };

    public setOptions(options: UserFormOption<any>[]) {
        this.options = options;
        return this;
    }

    public onAccessCheck(accessChecker: UserGroupAccessChecker): this {
        this.canAccess = accessChecker;
        return this;
    }

    public build(): UserFormOptionGroup {
        return {
            id: this.id,
            canAccess: this.canAccess,
            meta: this.meta,
            options: this.options,
        };
    }
}
