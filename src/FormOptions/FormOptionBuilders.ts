import type {
    GuildAccessChecker,
    GuildFormOption,
    GuildGetter,
    GuildSetter,
    UserAccessChecker,
    UserFormOption,
    UserGetter,
    UserSetter,
} from './FormOption';

abstract class BaseOptionBuilder {
    protected id!: string;
    protected meta: { [key: string]: any } = {
        core: {},
    };
    protected type!: string;

    public setId(id: string): this {
        this.id = id;
        return this;
    }

    public setMeta(meta: { [key: string]: any }): this {
        this.meta = {
            ...this.meta,
            ...meta,
        };
        return this;
    }

    public setName(name: string): this {
        this.meta.core = {
            ...this.meta.core,
            name,
        }
        return this;
    }

    public setDescription(description: string): this {
        this.meta.core = {
            ...this.meta.core,
            description,
        }
        return this;
    }
}

export abstract class GuildOptionBuilder<T> extends BaseOptionBuilder {
    private canAccess: GuildAccessChecker = async () => {
        return { allowed: true };
    };

    private get!: GuildGetter<T>;
    private set!: GuildSetter<T>;

    public onRequest(getter: GuildGetter<T>): this {
        this.get = getter;
        return this;
    }

    public onUpdate(setter: GuildSetter<T>): this {
        this.set = setter;
        return this;
    }

    public onAccessCheck(accessChecker: GuildAccessChecker): this {
        this.canAccess = accessChecker;
        return this;
    }

    public build(): GuildFormOption<T> {
        if (!this.id || !this.get || !this.set)
            throw new Error('Builder cannot build - data not complete.');

        return {
            id: this.id,
            type: this.type,
            meta: this.meta,
            canAccess: this.canAccess,
            get: this.get,
            set: this.set,
        };
    }
}

export abstract class UserOptionBuilder<T> extends BaseOptionBuilder {
    private canAccess: UserAccessChecker = async () => {
        return { allowed: true };
    };

    private get!: UserGetter<T>;
    private set!: UserSetter<T>;

    public onRequest(getter: UserGetter<T>): this {
        this.get = getter;
        return this;
    }

    public onUpdate(setter: UserSetter<T>): this {
        this.set = setter;
        return this;
    }

    public onAccessCheck(accessChecker: UserAccessChecker): this {
        this.canAccess = accessChecker;
        return this;
    }

    public build(): UserFormOption<T> {
        if (!this.id || !this.get || !this.set)
            throw new Error('Builder cannot build - data not complete.');

        return {
            id: this.id,
            type: this.type,
            meta: this.meta,
            canAccess: this.canAccess,
            get: this.get,
            set: this.set,
        };
    }
}
