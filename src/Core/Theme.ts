import type { Config } from '../Config';
import type { FastifyInstance } from 'fastify';
import type {
    GuildFormOptionGroup,
    UserFormOptionGroup,
} from '../FormOptions/FormGroup';

export interface Theme {
    name: string;
    version: string;
    inject: (
        fastify: FastifyInstance,
        config: Config,
        options: {
            guild: GuildFormOptionGroup[];
            user: UserFormOptionGroup[];
        },
    ) => Promise<void>;
}

export type { FastifyInstance } from 'fastify';
