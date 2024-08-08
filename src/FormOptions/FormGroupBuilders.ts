import type { GuildFormOptionGroup, UserFormOptionGroup } from './FormGroup';
import type { GuildFormOption, UserFormOption } from './FormOption';

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

    public setOptions(options: GuildFormOption<any>[]) {
        this.options = options;
        return this;
    }

    public build(): GuildFormOptionGroup {
        return {
            id: this.id,
            meta: this.meta,
            options: this.options,
        };
    }
}

export class UserFormGroupBuilder extends BaseGroupBuilder {
    protected options!: UserFormOption<any>[];

    public setOptions(options: UserFormOption<any>[]) {
        this.options = options;
        return this;
    }

    public build(): UserFormOptionGroup {
        return {
            id: this.id,
            meta: this.meta,
            options: this.options,
        };
    }
}
