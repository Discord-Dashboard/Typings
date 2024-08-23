import { PermissionsBitField } from 'discord.js';

enum Environment {
    DEVELOPMENT = 'development',
    STAGING = 'staging',
    PRODUCTION = 'production',
}

enum Protocol {
    HTTP = 'http',
    HTTPS = 'https',
}

interface Config {
    environment: Environment;

    api: {
        protocol: Protocol;
        domain: string;
        port: number;

        session: {
            secret: string;
        };

        guild_management: {
            permissions_required: PermissionsBitField;
        };
    };

    discord_oauth2: {
        client_id: string;
        client_secret: string;
    };

    assistants_technologies: {
        token: string;
    };
}

export { Config, Environment, Protocol };
