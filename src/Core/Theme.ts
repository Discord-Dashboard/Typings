import { Config } from '../Config';
import type { FastifyInstance } from 'fastify';
import {
    GuildFormOptionGroup,
    UserFormOptionGroup,
} from '../FormOptions/FormGroup';

export abstract class Theme {
    name!: string;
    inject!: (
        fastify: FastifyInstance,
        config: Config,
        options: {
            guild: GuildFormOptionGroup[];
            user: UserFormOptionGroup[];
        },
    ) => Promise<void>;
}
